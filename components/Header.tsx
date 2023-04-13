import { BsFillHeartFill } from 'react-icons/bs';
import React from 'react';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header className="flex justify-end text-sm text-gray-800 dark:text-gray-300">
      <ThemeToggler />
    </header>
  );
};

export default Header;
