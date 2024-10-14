import { Button } from "../components";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export const Home = () => {
  return (
    <div id="home" className="h-[80vh] pb-40 flex justify-center items-center">
      <div className="md:flex md:justify-center md:items-center">
        <div className="flex-col justify-center my-10 md:my-28 ml-5">
          <h2 className="pl-6 text-xl md:text-2xl lg:text-2xl xl:text-3xl antialiased">
            Hi, I&apos;m Alan.
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold antialiased">
            I give fast and innovative solutions.
          </h1>
          <div className="pt-4">
            <Button
              title="Get in touch"
              onclick={() => {
                const section = document.getElementById("contact");
                section.scrollIntoView();
              }}
              Icon={ArrowForwardRoundedIcon}
            />
          </div>
        </div>
        <div className="flex justify-center md:pl-40 md:pt-2">
          <img
            className="brightness-75 grayscale-0 w-40 lg:w-96 xl:w-auto rounded-xl md:max-w-[400px] sm:w-auto"
            src={`${import.meta.env.BASE_URL}assets/pictures/draft-face.png`}
          />
        </div>
      </div>
    </div>
  );
};
