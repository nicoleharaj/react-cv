import Head from "next/head";
import { Fragment } from "react";
import Container from "~/components/Container";
import { motion as m } from "framer-motion";
import { api } from "~/utils/api";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const projectQuery = api.project.list.useInfiniteQuery(
    {
      limit: 10,
    },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  const projectList = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const projectItem = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <>
      <Head>
        <title>Work - Nicole Haraj</title>
        <meta name="description" content="An online CV for Nicole Haraj" />
      </Head>

      <Container>
        <h2 className="text-4xl font-semibold md:text-5xl">My work</h2>

        {projectQuery.data?.pages.map((page, index) => (
          <m.ul
            className="flex w-full flex-wrap items-center justify-center gap-5"
            variants={projectList}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={index}
          >
            {page.items.map((project, index) => (
              <m.li key={project.id ?? index} variants={projectItem}>
                <Link href={`/work/${project.slug}`}>
                  <span className="sr-only">{project.title}</span>

                  <div className="card-transition relative h-48 w-48 shadow-md hover:z-50 hover:scale-105 hover:shadow-xl">
                    <Image
                      fill
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      sizes="12rem"
                      priority
                    />
                  </div>
                </Link>
              </m.li>
            ))}
          </m.ul>
        ))}
      </Container>
    </>
  );
}
