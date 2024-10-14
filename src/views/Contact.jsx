import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LinkButton } from "../components";

export const Contact = () => {
  return (
    <div id="contact" className="p-4 lg:p-28 antialised">
      <div className="h-full bg-slate-800 bg-opacity-25 p-8 2xl:p-16 rounded-3xl">
        <h1 className="sm:flex 2xl:ml-48 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold antialiased ">
          Contact me
        </h1>
        <div className="mt-8 2xl:mt-20 flex justify-center xl:justify-start gap-x-4">
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
      </div>
    </div>
  );
};
