import Head from 'next/head';
import { BsGithub } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { HiDownload } from 'react-icons/hi';
import Layout, { childVariant } from '../components/Layout';
import { motion as m } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import TimelineItem from '../components/TimelineItem';
import Badge from '../components/Badge';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nicole Haraj</title>
        <meta name="description" content="Portfolio site" />
      </Head>

      <Header />

      <m.div className="flex items-center gap-4">
        <h1 className="font-bold text-3xl sm:text-4xl dark:text-white">Nicole Haraj</h1>
        <ul className="flex gap-2 dark:text-black">
          <li>
            <a href="https://github.com/nicoleharaj" target="_blank" rel="noopener noreferrer" title="GitHub">
              <div className="flex justify-center text-md bg-white p-1 border rounded-full shadow-sm transition-transform hover:scale-105">
                <span className="sr-only">GitHub</span>
                <BsGithub />
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nicoleharaj" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <div className="flex justify-center text-md bg-white p-1 border rounded-full shadow-sm transition-transform hover:scale-105">
                <span className="sr-only">LinkedIn</span>
                <ImLinkedin2 />
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nicoleharaj" target="_blank" rel="noopener noreferrer" title="Download CV">
              <div className="flex justify-center text-md bg-white p-1 border rounded-full shadow-sm transition-transform hover:scale-105">
                <span className="sr-only">Download CV</span>
                <HiDownload />
              </div>
            </a>
          </li>
        </ul>
      </m.div>

      <m.div variants={childVariant} className="text-gray-500 font-semibold -mt-4">
        Full stack developer
      </m.div>
      <m.p variants={childVariant} className="text-gray-700 dark:text-gray-400 -mt-2">
        I&apos;m a full stack developer based in New York. Prior to pursuing a career in software development, I worked as a systems administrator, where I gained experience managing and maintaining
        complex computer systems.
      </m.p>

      <m.section className="mt-4">
        <m.h2 variants={childVariant} className="font-bold text-2xl mb-4 sm:text-3xl">
          Work Experience
        </m.h2>

        <m.ol variants={childVariant} className="relative border-l border-gray-200 dark:border-gray-700">
          <TimelineItem>
            <TimelineItem.Date>Sep 2021 &ndash; Sep 2022</TimelineItem.Date>
            <TimelineItem.Title>Junior Systems Administrator</TimelineItem.Title>
            <TimelineItem.Description className="flex flex-col gap-2">
              <div className="font-semibold text-sm">Softheon, Inc.</div>
              <p>
                As a junior systems administrator, I was responsible for managing and deploying servers, including Ubuntu, RHEL, and Windows servers with Hyper-V. In this role, I developed a deep
                understanding of server management principles, including ensuring production availability and server redundancy.
              </p>

              <p>
                In addition to server management, I also automated administrative tasks with PowerShell and Python, utilizing various APIs with Postman. This enforced the importance of automation in
                software development.
              </p>

              <p>
                I also worked closely with the software engineering team to ensure that our infrastructure was optimized for development and deployment. This experience gave me a strong understanding
                of Agile/Scrum development methodologies and the importance of communication and teamwork in software development.
              </p>
            </TimelineItem.Description>
          </TimelineItem>

          <TimelineItem>
            <TimelineItem.Date>Aug 2020 &ndash; Dec 2020</TimelineItem.Date>
            <TimelineItem.Title>Research Assistant</TimelineItem.Title>
            <TimelineItem.Description className="flex flex-col gap-2">
              <div className="font-semibold text-sm">Stony Brook University</div>
              <p>
                In my research under the computer science department, I utilized Catapult Web Page Replay to analyze network performance (number of requests, data transferred between client and
                server, resources loaded on the webpage, load time) under different VPN conditions. These metrics were observed through Google Chrome&apos;s Developer tools and captured in a
                controlled Ubuntu virtual machine. I gained a comprehensive understanding of VPN protocols such as OpenVPN (TCP and UDP), and state-of-the-art protocols such as NordLynx, and Lightway
                by ExpressVPN.
              </p>
            </TimelineItem.Description>
          </TimelineItem>

          <TimelineItem>
            <TimelineItem.Date>Aug 2019 &ndash; Dec 2019</TimelineItem.Date>
            <TimelineItem.Title>Teaching Assistant</TimelineItem.Title>
            <TimelineItem.Description className="flex flex-col gap-2">
              <div className="font-semibold text-sm">Stony Brook University</div>
              <p>
                As a teaching assistant, I led classes of 26 students while administering and grading object-oriented Java programming assignments. I also held office hours twice a week to reinforce
                course materials while helping students reach their learning objectives in a small group or one-on-one session.
              </p>
            </TimelineItem.Description>
          </TimelineItem>
        </m.ol>
      </m.section>

      <m.section className="mt-4">
        <m.h2 variants={childVariant} className="font-bold text-2xl mb-4 sm:text-3xl">
          Education
        </m.h2>

        <m.ol variants={childVariant} className="relative border-l border-gray-200 dark:border-gray-700">
          <TimelineItem>
            <TimelineItem.Date>Sep 2022 &ndash;</TimelineItem.Date>
            <TimelineItem.Title>University of California, Irvine</TimelineItem.Title>
            <TimelineItem.Description className="flex flex-col gap-2">
              <div className="font-semibold text-sm">Full Stack Developer Certification</div>
              <p>
                Upon my departure from Softheon, I decided to pursue a certification in full stack development to enforce my self-taught knowledge in web development. During my time in this program, I
                have studied HTML/CSS, JavaScript, and React, as well as coding best practices, version control, and staying up-to-date with latest technologies.
              </p>
            </TimelineItem.Description>
          </TimelineItem>

          <TimelineItem>
            <TimelineItem.Date>Aug 2016 &ndash; Dec 2020</TimelineItem.Date>
            <TimelineItem.Title>Stony Brook University</TimelineItem.Title>
            <TimelineItem.Description className="flex flex-col gap-2">
              <div className="font-semibold text-sm">Bachelor&apos;s of Science, Information Systems</div>
              <p>
                At Stony Brook University, I had the privilage to explore and expand my passion for computers. With a specialization in System and Networking Administration, I learned how to design
                and implement databases and network servers from start to finish. I also had the opportunity to explore my interest in computer networks and cybersecurity.
              </p>
            </TimelineItem.Description>
          </TimelineItem>
        </m.ol>
      </m.section>

      <m.section className="mt-4">
        <m.h2 variants={childVariant} className="font-bold text-2xl mb-4 sm:text-3xl">
          Projects
        </m.h2>
        <m.ul variants={childVariant} className="flex flex-col gap-8 self-center">
          <ProjectCard>
            <div className="flex flex-col gap-2">
              <ProjectCard.Title className="flex items-center gap-4">
                Discord Bot <Badge>Rust</Badge>
              </ProjectCard.Title>
              <ProjectCard.Description>
                Created an interactive Discord bot using Rust and the Serenity library for the Discord API to manage and store user statistics and achievements. Designed the bot with user-driven event
                handling features and utilized Amazon DynamoDB for real-time data access. Packaged the bot using Docker and deployed it to AWS Fargate, enabling easy management and scalability.
              </ProjectCard.Description>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-2">
              <ProjectCard.Title className="flex items-center gap-4">
                React Notes <Badge>TypeScript</Badge> <Badge>React</Badge> <Badge>Nextjs</Badge>
              </ProjectCard.Title>
              <ProjectCard.Description>
                Developed a full-stack note-taking application using TypeScript and MongoDB. Users can create, modify, and delete notes that support markdown, and are filterable by tags. The front-end of the application was built using the Next.js React framework and deployed with Vercel. 
              </ProjectCard.Description>
            </div>
          </ProjectCard>
        </m.ul>
      </m.section>
    </Layout>
  );
}
