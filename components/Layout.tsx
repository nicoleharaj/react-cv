import React, { ReactNode } from 'react';
import { motion as m } from 'framer-motion';

type LayoutProps = {
  children: ReactNode;
};

const variants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
      staggerChildren: 0.2,
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
    },
  },
};

export const childVariant = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <m.main initial="initial" animate="enter" exit="exit" variants={variants} className="flex-grow flex flex-col gap-4 w-full max-w-4xl">
      {children}
    </m.main>
  );
};

export default Layout;
