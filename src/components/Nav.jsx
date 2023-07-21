import { nav } from "../data";

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex justify-center items-center w-full h-full gap-8">
        {nav.map((item, index) => (
          <li
            className="text-white hover:text-primary-200 transition"
            key={index}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
