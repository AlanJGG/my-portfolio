import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LinkButton } from "../components";

export const Contact = () => {
  return (
    <div id="contact" className="h-screen mt-20 p-8 lg:p-28 antialised">
      <h1 className="sm:flex 2xl:ml-48 text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold antialiased ">
        Contact me
      </h1>
      <div className="mt-8 2xl:mt-20">
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
  );
};
