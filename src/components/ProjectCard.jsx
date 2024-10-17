import PropTypes from "prop-types";

export const ProjectCard = ({
  image,
  title,
  description,
  link,
  technologies,
}) => {
  return (
    <div className="relative bg-white shadow-md shadow-slate-800 rounded-lg overflow-hidden hover:shadow-white ease-in-out duration-300 max-w-xs transform hover:scale-105 transition-transform">
      {image ? (
        <img
          className="w-full h-48 object-cover"
          src={`${import.meta.env.BASE_URL}assets/projects/${image}`}
          alt={`${title} screenshot`}
        />
      ) : null}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className={`text-gray-600 mb-2 ${!link ? 'pb-16': ''}`}>{description}</p>
        {link ? (
          <a href={link} className="h-full mb-16 inline-flex shadow hover:shadow-lg items-center bg-slate-600 bg-opacity-50 rounded-lg hover:bg-slate-900/25 focus:bg-slate-900/25 ease-in-out duration-300 text-gray-800 mb-4  p-2" target="_blank">
            <span>GitHub Repository</span>
          </a>
        ) : null}

        <div className="flex flex-wrap absolute bottom-0">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-sm font-semibold rounded-full px-3 py-1 mr-2 mb-2"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
