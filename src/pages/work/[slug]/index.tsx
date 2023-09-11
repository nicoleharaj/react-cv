import Head from "next/head";
import Container from "~/components/Container";
import { api } from "~/utils/api";
import Image from "next/image";
import { useRouter } from "next/router";
import Tag from "~/components/Tag";
import { motion as m } from "framer-motion";

const MotionContainer = m(Container);

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.215, 0.61, 0.355, 1.0] },
  },
};

export default function Work() {
  const slug = useRouter().query.slug as string;
  const projectQuery = api.project.bySlug.useQuery({ slug: slug });
  const project = { ...projectQuery };

  return (
    <>
      <Head>
        <title>{project.data?.title} - Nicole Haraj</title>
        <meta name="description" content="An online CV for Nicole Haraj" />
      </Head>
      {project.data && (
        <MotionContainer
          className="gap-5"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-semibold sm:text-5xl">
            {project.data.title}
          </h2>
          <m.div className="flex gap-2" variants={item}>
            {project.data.technologies.map((technology) => (
              <Tag key={technology.id} name={technology.name} />
            ))}
          </m.div>
          <m.div className="mt-5 flex flex-col gap-4 text-lg" variants={item}>
            <p>{project.data.description}</p>

            {project.data.url && (
              <a
                href={project.data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Check out this project
              </a>
            )}
          </m.div>
        </MotionContainer>
      )}
    </>
  );
}
