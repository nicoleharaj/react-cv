import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const defaultProjectSelect = Prisma.validator<Prisma.ProjectSelect>()({
  id: true,
  title: true,
  description: true,
  thumbnail: true,
  url: true,
  technologies: true,
  createdAt: true,
  slug: true,
});

export const projectRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 50;
      const { cursor } = input;

      const items = await ctx.prisma.project.findMany({
        select: defaultProjectSelect,
        take: limit + 1,
        where: {},
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
        orderBy: {
          createdAt: "asc",
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop()!;
        nextCursor = nextItem.id;
      }

      return {
        items: items.reverse(),
        nextCursor,
      };
    }),

  bySlug: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { slug } = input;

      const project = await ctx.prisma.project.findUnique({
        select: defaultProjectSelect,
        where: { slug },
      });
      if (!project) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No project with slug ${slug}`,
        });
      }
      return project;
    }),
});
