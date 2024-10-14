import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LinkButton } from "./";
export const Footer = () => {
  return (
    <footer className="border-t-[2px] border-sate-500 px-20 bg-slate-900/100 bg-opacity-50 w-full h-[10vh] inline-flex items-center justify-between">
      <div>
        <span>© 2024 Alan Guzman</span>
      </div>
      <div className=" flex justify-center xl:justify-start gap-x-4">
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
