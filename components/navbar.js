import Link from 'next/link';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="py-10 flex justify-end">
      <ul className="flex items-center gap-8">
        <li>
          <Link href="/">Home</Link>
        </li><li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="cursor-pointer">
          <BsFillMoonStarsFill className="block dark:hidden" />
          <BsFillSunFill className="hidden dark:block" /></li>
      </ul>
    </nav>
  );
}