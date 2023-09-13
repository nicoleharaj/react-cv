import Head from "next/head";
import Container from "~/components/Container";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import Tag from "~/components/Tag";
import { motion as m } from "framer-motion";
import Custom404 from "~/pages/404";

const MotionContainer = m(Container);
const MotionTag = m(Tag);

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.215, 0.61, 0.355, 1.0] },
  },
};

const tagGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export default function Work() {
  const slug = useRouter().query.slug as string;

  if (slug !== undefined) {
    const projectQuery = api.project.bySlug.useQuery(
      { slug: slug },
      {
        retry: false,
      }
    );
    const project = { ...projectQuery };

    return (
      <>
        {project.isError && (
          <>
            <Custom404 />
          </>
        )}

        {project.data && (
          <>
            <Head>
              <title>{project.data?.title} - Nicole Haraj</title>
              <meta
                name="description"
                content="An online CV for Nicole Haraj"
              />
            </Head>

            <MotionContainer
              className="gap-5"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-4xl font-semibold sm:text-5xl">
                {project.data.title}
              </h2>
              <m.div
                className="flex gap-2"
                variants={tagGroup}
                initial="hidden"
                animate="visible"
              >
                {project.data.technologies.map((technology) => (
                  <MotionTag
                    key={technology.id}
                    name={technology.name}
                    variants={item}
                  />
                ))}
              </m.div>
              <m.p className="mt-5 text-lg" variants={item}>
                {project.data.description}
              </m.p>

              {project.data.url && (
                <m.a
                  href={project.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                  variants={item}
                >
                  Check out this project
                </m.a>
              )}
            </MotionContainer>
          </>
        )}
      </>
    );
  }
}
