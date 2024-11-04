import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LinkButton } from "./";
export const Footer = () => {
  return (
    <footer className="border-t-[2px] border-slate-500 px-10 2xl:px-20 bg-slate-900 bg-opacity-40 w-full h-[10vh] inline-flex items-center justify-between">
      <div>
        <span className="font-medium text-slate-500 text-opacity-80">© 2024 Alan Guzman</span>
      </div>
      <div className="flex justify-center xl:justify-start gap-x-4">
        <span className="hidden md:inline-flex items-center text-slate-500">alanjguzmangutierrez@gmail.com</span>
        <LinkButton
          Icon={LinkedInIcon}
          link="https://www.linkedin.com/in/alan-joseph-g/"
          title="LinkedIn"
        />
        <LinkButton
          Icon={GitHubIcon}
          link="https://github.com/AlanJGG"
          title="GitHub"
        />
      </div>
    </footer>
  );
};
