import { footer } from "../data";

const Footer = () => {
  const { logo, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px]">
      <div className="container mx-auto flex justify-between px-6 lg:px-0 items-center h-full">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <p className="text-neutral-300">
          <span className="mr-2">&copy;</span>
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
