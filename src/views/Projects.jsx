import { ProjectCard } from "../components";

export const Projects = () => {
  const projects = [
    {
      title: "AlteniaVenta",
      image: "altenia-logo.png",
      description:
        "AlteniaVenta is a system that streamlines the accounting and logistics of a tortilla shop.",
      link: "https://github.com/AlanJGG/AlteniaVenta",
      technologies: ["React", "Javascript", "Electron", "Express", "SQLite"],
    },
    {
      title: "CREAMEDIC Clinica Digital",
      image: "creamedic-app.png",
      description:
        "The app offers centralized access to medical services, allowing users to schedule lab tests, request ambulances, book online consultations, and arrange video calls with doctors.",
      technologies: ["ReactNative", "TypeScript", "Redux"],
    },
  ];
  return (
    <div
      id="projects"
      className="min-h-screen p-8 lg:p-28 antialised 2xl:pb-40"
    >
      <h1 className="sm:flex 2xl:ml-48 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold antialiased ">
        Work
      </h1>
      <div className="mt-8 2xl:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};
