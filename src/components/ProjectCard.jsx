import PropTypes from "prop-types";

export const ProjectCard = ({ image, title, description, technologies }) => {
  return (
    <div className="bg-white shadow-md shadow-slate-800 rounded-lg overflow-hidden hover:shadow-white ease-in-out duration-300 max-w-xs transform hover:scale-105 transition-transform">
      {image ? (
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={`${title} screenshot`}
        />
      ) : null}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap">
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
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
