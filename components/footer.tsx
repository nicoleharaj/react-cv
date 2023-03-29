import { BsFillHeartFill } from 'react-icons/bs';
import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="pt-8 flex flex-col items-center justify-center p-2 text-sm text-gray-700 dark:text-gray-500">
      <p className="flex flex-row gap-1">
        <span className='flex  items-center'>Made with <BsFillHeartFill className="mx-1 text-xs" /> by Nicole</span> 
        <a href="mailto:me@nicoleharaj.com" className="underline">
          me@nicoleharaj.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
