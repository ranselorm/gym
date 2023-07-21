import { nav } from "../data";

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={`${
        navMobile ? "min-h-full" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 right-0 left-0 bottom-12 overflow-hidden -z-10 transition-all h-0`}
    >
      <ul className="flex flex-col justify-center items-center w-full h-full gap-8">
        {nav.map((item, index) => (
          <li className="text-white text-body-md" key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="text-white -mt-44 flex justify-center gap-x-4">
        <button className="btn btn-lg">Login</button>
        <button className="btn btn-lg btn-primary">Signup</button>
      </div>
    </nav>
  );
};

export default NavMobile;
