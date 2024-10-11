export const About = () => {
  return (
    <div id="about" className="h-screen pt-20 2xl:mt-48 p-8 lg:p-28 antialised 2xl:pb-40">
      <h1 className="sm:flex 2xl:ml-48 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold antialiased ">
        About me
      </h1>
      <div className="w-full lg:flex gap-x-24 mt-8 2xl:mt-20">
        <p className="lg:w-6/12 lg:ml-20  xl:text-lg">
          I'm Alan, passionate about technology and currently pursuing studies
          in Software Development. With a strong aptitude for problem-solving
          and a collaborative spirit, I thrive in team environments where I can
          contribute and learn from others. My enthusiasm lies in personal
          growth and continuous learning, which drives my dedication to
          mastering new skills and technologies. I aspire to leverage my
          technical knowledge and teamwork skills to create impactful solutions
          in the software development field.
        </p>
        <div className="w-full flex justify-center mt-10 lg:mt-0">
          <div className="w-full grid gap-y-10 grid-cols-2">
            <div className="">
              <h1 className="font-semibold text-2xl">Education</h1>
              <ul className="mt-4 ml-5 list-disc grid gap-y-2">
                <li>React</li>
                <li>React</li>
                <li>React</li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-semibold text-2xl">Work Experience</h1>
              <ul className="mt-4 ml-5 list-disc grid gap-y-2">
                <li>Speaking</li>
                <li>Speaking</li>
                <li>Speaking</li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-semibold text-2xl">Technical Skills</h1>
              <ul className="mt-4 ml-5 list-disc grid gap-y-2">
                <li>Speaking</li>
                <li>Speaking</li>
                <li>Speaking</li>
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
  );
};
