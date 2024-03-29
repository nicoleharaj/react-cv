import Head from "next/head";
import Container from "../components/Container";
import { Icon } from "@iconify/react";
import { motion as m } from "framer-motion";

const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nicoleharaj/",
    title: "View LinkedIn profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/nicoleharaj",
    title: "View GitHub profile",
  },
  {
    label: "Email",
    href: "mailto:nicoleharaj@outlook.com",
    title: "Email",
  },
  {
    label: "Resume",
    href: "https://github.com/nicoleharaj/react-cv/raw/main/public/nicole_haraj_cv.pdf",
    title: "Download resume",
  },
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.215, 0.61, 0.355, 1.0] },
  },
};

const linkGroup = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicole Haraj</title>
        <meta name="description" content="Nicole Haraj's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MotionContainer
        className="gap-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-semibold sm:text-5xl">About Me</h2>
        <m.ul
          className="-mt-2 flex gap-5"
          variants={linkGroup}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <m.li key={link.href} className="text-2xl" variants={item}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit transition-colors hover:text-jungle-green-500"
                title={link.title}
              >
                {link.label === "LinkedIn" ? (
                  <>
                    <Icon
                      icon="bxl:linkedin"
                      className="transition-transform hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{link.label}</span>
                  </>
                ) : link.label === "GitHub" ? (
                  <>
                    <Icon
                      icon="bxl:github"
                      className="transition-transform hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{link.label}</span>
                  </>
                ) : link.label === "Email" ? (
                  <>
                    <Icon
                      icon="mdi:email-heart-outline"
                      className="transition-transform hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{link.label}</span>
                  </>
                ) : link.label === "Resume" ? (
                  <>
                    <Icon
                      icon="ic:round-download"
                      className="transition-transform hover:scale-110"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{link.label}</span>
                  </>
                ) : (
                  `${link.label}`
                )}
              </a>
            </m.li>
          ))}
        </m.ul>
        <m.p className="mt-5 text-lg md:text-xl" variants={item}>
          I&apos;m a Full Stack Engineer based in New York. My experience spans
          software development and systems administration, where I have gained a
          perspective on user experience, availability, security, and
          efficiency.
        </m.p>
        <m.p className="text-lg md:text-xl" variants={item}>
          Beyond my professional roles, I&apos;ve dedicated time to several
          personal initiatives that both challenge and excite me. The
          exploration of new and emerging technologies being the main driver. My
          objective is to find roles that allow me to apply and expand my
          skills, pushing both personal growth and organizational success.
        </m.p>
      </MotionContainer>
    </>
  );
}
