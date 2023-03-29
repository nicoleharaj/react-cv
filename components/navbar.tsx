import ThemeToggler from './ThemeToggler';

const Navbar = (): JSX.Element => {
  return (
    <nav className="py-4 h-28 max-w-4xl flex w-full items-center justify-between">
      <ul className="flex flex-grow items-center justify-end gap-8">
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
