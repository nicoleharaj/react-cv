import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const links = [
    { label: "About", href: "/" },
    { label: "Work", href: "/work" },
  ];

  return (
    <nav
      className="flex flex-col justify-center gap-6 border-b py-16 text-off-black"
      id="navbar"
    >
      <h1 className="text-5xl font-semibold">Nicole Haraj</h1>
      <ul className="flex items-center gap-4 text-lg font-semibold">
        {links.map(({ label, href }) => {
          if (router.asPath === href) {
            return (
              <li key={href}>
                <span className="active-link cursor-default">{label}</span>
              </li>
            );
          } else {
            return (
              <li key={href}>
                <Link href={href} className=" inactive-link">
                  {label}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
