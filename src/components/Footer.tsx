import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-20 w-full p-2 pt-10 text-sm text-gray-700 dark:text-gray-500">
      <p className="flex w-full items-center justify-center gap-1 text-center">
        Made with <Icon icon="ph:heart-fill" /> by Nicole
      </p>
    </footer>
  );
};

export default Footer;
