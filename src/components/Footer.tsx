import { BsFillHeartFill } from "react-icons/bs";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-20 w-full p-2 pt-10 text-sm text-gray-700 dark:text-gray-500">
      <p className="flex w-full items-center justify-center gap-1 text-center">
        Made with <BsFillHeartFill className="mx-1 text-xs" /> by Nicole
      </p>
    </footer>
  );
};

export default Footer;
