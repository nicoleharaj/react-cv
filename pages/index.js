import Head from 'next/head';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Nicole Haraj</title>
        <meta name="description" content="Portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen overflow-y-scroll snap-mandatory snap-y bg-gray-100 px-10 dark:bg-gray-900 dark:text-white">
        <section className="snap-start min-h-screen">
          <nav className="py-10 flex justify-end">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
                <BsFillMoonStarsFill className="block dark:hidden" />
                <BsFillSunFill className="hidden dark:block" /></li>
            </ul>
          </nav>
        </section>
        <section id="about" className="snap-start min-h-screen">About</section>
        <section id="Projects" className="snap-start min-h-screen">Projects</section>
        <section id="Contact" className="snap-start min-h-screen">Contact</section>
      </main>
    </div>
  );
}
