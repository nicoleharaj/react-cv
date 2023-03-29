import Head from 'next/head';
import Card from '../components/Card';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import Layout, { childVariant } from '../components/Layout';
import { motion as m } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nicole Haraj</title>
        <meta name="description" content="Portfolio site" />
      </Head>
      <m.div className="flex items-center gap-4">
        <h1 className="font-bold text-3xl sm:text-4xl dark:text-white">Nicole Haraj</h1>
        <ul className="flex gap-2 dark:text-black">
          <li>
            <a href="https://github.com/nicoleharaj" target="_blank" rel="noopener noreferrer">
              <Card className="flex justify-center text-lg bg-white p-2 border rounded-full shadow-sm transition-transform hover:scale-105">
                <span className="sr-only">GitHub</span>
                <BsGithub />
              </Card>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nicoleharaj" target="_blank" rel="noopener noreferrer">
              <Card className="flex justify-center text-lg bg-white p-2 border rounded-full shadow-sm transition-transform hover:scale-105">
                <span className="sr-only">LinkedIn</span>
                <ImLinkedin2 />
              </Card>
            </a>
          </li>
        </ul>
      </m.div>

      <m.div variants={childVariant} className='text-gray-500 font-semibold'>Full stack developer</m.div>
      <m.p variants={childVariant} className="text-gray-700 dark:text-gray-400">
        I'm a full stack developer based in New York. Prior to pursuing a career in software development, I worked as a systems administrator, where I gained experience managing and maintaining complex
        computer systems.
      </m.p>

      <m.section className='mt-4'>
        <m.h2 variants={childVariant} className="font-bold text-2xl sm:text-3xl">
          My work
        </m.h2>
        <m.ul variants={childVariant} className="flex flex-col gap-8 self-center mt-4">
          <ProjectCard>
            <div className="flex flex-col gap-2">
              <ProjectCard.Title>Project Title</ProjectCard.Title>
              <ProjectCard.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis aut ad est officia distinctio, eligendi nulla error. Illo placeat adipisci eveniet suscipit doloremque. Eius
                voluptas animi illum porro vitae?
              </ProjectCard.Description>
            </div>
            <Image width={600} height={400} src="https://placehold.co/600x400" alt="" />
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-2">
              <ProjectCard.Title>Project Title</ProjectCard.Title>
              <ProjectCard.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis aut ad est officia distinctio, eligendi nulla error. Illo placeat adipisci eveniet suscipit doloremque. Eius
                voluptas animi illum porro vitae?
              </ProjectCard.Description>
            </div>
            <Image width={600} height={400} src="https://placehold.co/600x400" alt="" />
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-2">
              <ProjectCard.Title>Project Title</ProjectCard.Title>
              <ProjectCard.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis aut ad est officia distinctio, eligendi nulla error. Illo placeat adipisci eveniet suscipit doloremque. Eius
                voluptas animi illum porro vitae?
              </ProjectCard.Description>
            </div>
            <Image width={600} height={400} src="https://placehold.co/600x400" alt="" />
          </ProjectCard>
        </m.ul>
      </m.section>
    </Layout>
  );
}
