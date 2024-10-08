export const Navbar = () => {
  return (
    <header id="navbar" className="fixed top-0 left-0 w-full z-50 bg-black">
      <nav className="py-5 flex justify-center">
        <ul className="flex lg:gap-x-16 sm:gap-x-2.5 2xl:text-xl">
          <li className="px-2">
            <a
              href="#home"
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300"
            >
              Home
            </a>
          </li>
          <li className="px-2">
            <a
              href="#about"
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300 antialiased"
            >
              About
            </a>
          </li>
          <li className="px-2">
            <a
              href="#projects"
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300 antialiased"
            >
              Projects
            </a>
          </li>
          <li className="px-2">
            <a
              href="#blog"
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300 antialiased"
            >
              Blog
            </a>
          </li>
          <li className="px-2 ">
            <a
              href="#contact"
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300 antialiased"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
