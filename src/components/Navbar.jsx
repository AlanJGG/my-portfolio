import { LinkButton } from "./LinkButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Navbar = () => {
  return (
    <header id="navbar" className="w-full h-[20vh] z-50 relative">
      <nav className="h-full pb-10 flex items-center justify-center xl:justify-between px-10">
        <img className="hidden md:flex max-w-12"src={`${import.meta.env.BASE_URL}assets/portfolioIcon.svg`} />
        <ul className="bg-slate-800 bg-opacity-25 p-3 rounded-full shadow-md ease-in-out duration-300 hover:shadow-lg flex lg:gap-x-16 gap-x-2.5 2xl:text-2xl">
          <li className="px-2">
            <button
              onClick={() => {
                const section = document.getElementById("about");
                section.scrollIntoView();
              }}
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300 antialiased"
            >
              About
            </button>
          </li>
          <li className="px-2">
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                section.scrollIntoView();
              }}
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300 antialiased"
            >
              Work
            </button>
          </li>
          <li className="px-2">
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                section.scrollIntoView();
              }}
              className="hover:text-amber-500 focus:text-amber-500 ease-in-out duration-300 antialiased"
            >
              Blog
            </button>
          </li>
        </ul>
        <div className="hidden md:flex gap-x-2">
          <LinkButton
            Icon={LinkedInIcon}
            link="https://www.linkedin.com/in/alan-joseph-g/"
          />
          <LinkButton Icon={GitHubIcon} link="https://github.com/AlanJGG" />
        </div>
      </nav>
    </header>
  );
};
