import { TechnologyLabel } from "../components";

export const About = () => {
  return (
    <div id="about" className="xl:h-screen p-4 lg:p-28 antialised 2xl:pb-40">
      <div className="h-full shadow-md ease-in-out duration-300 hover:shadow-lg bg-slate-800 bg-opacity-25 p-8 2xl:p-16 rounded-3xl">
        <h1 className="sm:flex 2xl:ml-48 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold antialiased ">
          About me
        </h1>
        <div className="w-full lg:flex gap-x-24 mt-8 2xl:mt-20 xl:text-lg">
          <p className="lg:w-6/12 lg:ml-20  ">
            I&apos;m Alan, passionate about technology and currently pursuing studies
            in Software Development. With a strong aptitude for problem-solving
            and a collaborative spirit, I thrive in team environments where I
            can contribute and learn from others. My enthusiasm lies in personal
            growth and continuous learning, which drives my dedication to
            mastering new skills and technologies. I aspire to leverage my
            technical knowledge and teamwork skills to create impactful
            solutions in the software development field.
          </p>
          <div className="w-full flex justify-center mt-10 lg:mt-0">
            <div className="w-full grid gap-y-10 lg:grid-cols-2">
              <div className="">
                <h1 className="font-semibold text-2xl">Education</h1>
                <ul className="mt-4 ml-5 list-disc grid gap-y-2">
                  <li>Bachelor of Software Development, Seneca College</li>
                  
                </ul>
              </div>
              <div className="">
                <h1 className="font-semibold text-2xl">Work Experience</h1>
                <ul className="mt-4 ml-5 list-disc grid gap-y-2">
                  <li>1 year working as a freelancer</li>
                  <li>1 year working in an IT solutions startup</li>
                </ul>
              </div>
              <div className="">
                <h1 className="font-semibold text-2xl">Technologies</h1>
                <ul className="mt-4 ml-5 list-none grid gap-y-2">
                  <li><TechnologyLabel icon="react.svg" title="React"/></li>
                  <li><TechnologyLabel icon="nodejs.svg" title="Node"/></li>
                  <li><TechnologyLabel icon="typescript.svg" title="TypeScript"/></li>
                  <li><TechnologyLabel icon="mysql.svg" title="MySQL"/></li>
                  <li><TechnologyLabel icon="mongodb.svg" title="MongoDB"/></li>
                </ul>
              </div>
              <div className="">
                <h1 className="font-semibold text-2xl">Soft Skills</h1>
                <ul className="mt-4 ml-5 list-disc grid gap-y-2">
                  <li>Speaking</li>
                  <li>Speaking</li>
                  <li>Speaking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
