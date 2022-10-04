import Link from 'next/link';
import Hamburger from './hamburger';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const pages = [
  {
    'endpoint': '/about',
    'title': 'About'
  },
  {
    'endpoint': '/projects',
    'title': 'Projects'
  },
  {
    'endpoint': '/contact',
    'title': 'Contact'
  },
];

const Navbar = (): JSX.Element => {
  const listItems = pages.map((page) =>
    <li key={page.endpoint} > <Link href={page.endpoint}>{page.title}</Link></li>
  );

  return (
    <nav className="py-10 flex justify-between">
      <h1 className="font-semibold text-2xl"><Link href="/">NH</Link></h1>
      <ul className="hidden md:flex md:items-center md:gap-8">
        {listItems}
        <li className="cursor-pointer">
          <BsFillMoonStarsFill className="block dark:hidden" />
          <BsFillSunFill className="hidden dark:block" />
        </li>
      </ul>

      <Hamburger>
        <ul className='flex flex-col gap-2 p-2'>
          {listItems}
          <li className="cursor-pointer">
            <BsFillMoonStarsFill className="block dark:hidden" />
            <BsFillSunFill className="hidden dark:block" />
          </li>
        </ul>
      </Hamburger>
    </nav>
  );
}

export default Navbar;