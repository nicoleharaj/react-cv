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
        <meta name="description" content="An online CV for Nicole Haraj" />
      </Head>

      <Header />

      <m.div className="flex items-center gap-4">
        <h1 className="font-bold text-3xl sm:text-4xl dark:text-white">Nicole Haraj</h1>
        <ul className="flex gap-2 dark:text-black">
          <li>
            <a href="https://github.com/nicoleharaj" target="_blank" rel="noopener noreferrer" title="GitHub">
              <div className="flex justify-center text-md bg-white p-1 border rounded-full shadow-sm transition-transform hover:scale-125">
                <span className="sr-only">GitHub</span>
                <BsGithub />
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nicoleharaj" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <div className="flex justify-center text-md bg-white p-1 border rounded-full shadow-sm transition-transform hover:scale-125">
                <span className="sr-only">LinkedIn</span>
                <ImLinkedin2 />
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/nicoleharaj/react-cv/raw/main/public/nicole_haraj_cv.pdf" target="_blank" rel="noopener noreferrer" title="Download CV">
              <div className="flex justify-center text-md bg-white p-1 border rounded-full shadow-sm transition-transform hover:scale-125">
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
      <m.p variants={childVariant} className="text-gray-500 dark:text-gray-400 -mt-2">
        I&apos;m a full-stack developer based in New York. Prior to pursuing a career in software development, I worked as a systems administrator, where I gained experience managing and maintaining
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
              <ul className="list-outside list-disc ml-5">
                <li>Procure, manage, and deploy Ubuntu, RHEL, and Windows servers with Hyper-V.</li>
                <li>Manage Docker Engine and Docker Desktop on Azure, Ubuntu servers, and developer workstations.</li>
                <li>Work alongside software engineering team to configure server redundancy with RabbitMQ.</li>
                <li>Automate administrative tasks with PowerShell and Python, utilizing various APIs with Postman. </li>
                <li>Plan, coordinate, and deploy Windows 11 upgrade program to 300+ workstations.</li>
                <li>Manage administration and security access of 250+ users with Active Directory and Azure Active Directory.</li>
                <li>Create, design, format, and distribute company-wide communications.</li>
                <li>Produce daily report to notify product, development, and security teams of infrastructure health.</li>
              </ul>
            </TimelineItem.Description>
          </TimelineItem>

          <TimelineItem>
            <TimelineItem.Date>Aug 2020 &ndash; Dec 2020</TimelineItem.Date>
            <TimelineItem.Title>Research Assistant</TimelineItem.Title>
            <TimelineItem.Description className="flex flex-col gap-2">
              <div className="font-semibold text-sm">Stony Brook University</div>
              <ul className="list-outside list-disc ml-5">
                <li>Utilized Catapult Web Page Replay to analyze network performance under different VPN conditions.</li>
                <li>Metrics were observed through Chrome&apos;s Developer tools and captured in a controlled Ubuntu virtual machine.</li>
                <li>Gained a understanding of VPN protocols such as OpenVPN (TCP and UDP), and state-of-the-art protocols such as NordLynx, and Lightway by ExpressVPN.</li>
              </ul>
            </TimelineItem.Description>
          </TimelineItem>

          <TimelineItem>
            <TimelineItem.Date>Aug 2019 &ndash; Dec 2019</TimelineItem.Date>
            <TimelineItem.Title>Teaching Assistant</TimelineItem.Title>
            <TimelineItem.Description className="flex flex-col gap-2">
              <div className="font-semibold text-sm">Stony Brook University</div>

              <ul className="list-outside list-disc ml-5">
                <li>Led classes of 26 students where object-oriented Java programming assignments were administered and graded.</li>
                <li>Held office hours twice a week to reinforce course materials to help students reach their learning objectives.</li>
                <li>Recorded and updated numerical data relating to student grades in Microsoft Excel and university website</li>
                <li>Effectively communicated with both students and professor to relay information related to course logistics, student performance, expectations, and concerns.</li>
              </ul>
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
        <m.ul variants={childVariant} className="flex flex-col gap-8">
          <ProjectCard>
            <div className="flex flex-col gap-2">
              <ProjectCard.Title className="flex items-center gap-4">
                Discord Bot <Badge>Rust</Badge>
              </ProjectCard.Title>
              <ProjectCard.Description>
                <ul className="list-outside list-disc ml-5">
                  <li>Used Rust, Serenity library for Discord API, and DynamoDB to create, manage, and store user statistics and achievements.</li>
                  <li>Interactive bot with user-driven event handling features.</li>
                  <li>Packaged with Docker and hosted on AWS Fargate.</li>
                </ul>
              </ProjectCard.Description>
            </div>
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-col gap-2">
              <ProjectCard.Title className="flex items-center gap-4">
                React Notes <Badge>TypeScript</Badge> <Badge>React</Badge> <Badge>Nextjs</Badge>
              </ProjectCard.Title>
              <ProjectCard.Description>
                <ul className="list-outside list-disc ml-5">
                  <li>Used TypeScript and MongoDB to create a full-stack note-taking application.</li>
                  <li>Allows users to create, modify, and delete (CRUD) markdown-supported notes with filterable tags.</li>
                  <li>Built using the Next.js React framework and hosted on Vercel.</li>
                </ul>
              </ProjectCard.Description>
            </div>
          </ProjectCard>         
        </m.ul>
      </m.section>
    </Layout>
  );
}
