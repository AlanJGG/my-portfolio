export const Navbar = () => {
  return (
    <header id="navbar">
      <nav className="pt-6">
        <ul className="flex">
          <li className="px-6 ">
            <a href="#home" className="hover:text-black focus:text-green">
              Home
            </a>
          </li>
          <li className="px-6">
            <a href="#about">About</a>
          </li>
          <li className="px-6">
            <a href="#work">Work</a>
          </li>
          <li className="px-6">
            <a href="#blog">Blog</a>
          </li>
          <li className="px-6">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
