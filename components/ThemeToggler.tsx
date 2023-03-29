import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggler = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <button aria-label="Toggle dark mode" className="text-xl block dark:hidden" onClick={() => setTheme('dark')}>
        <BsFillMoonStarsFill />
      </button>
      <button aria-label="Toggle light mode" className="text-xl hidden dark:block" onClick={() => setTheme('light')}>
        <BsFillSunFill />
      </button>
    </>
  );
};

export default ThemeToggler;
