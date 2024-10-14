import PropTypes from "prop-types";

export const TechnologyLabel = ({ icon, title }) => {
  return (
    <div className="bg-cyan-600 inline-flex w-40 items-center gap-x-2 p-2 px-3 font-bold rounded-3xl bg-opacity-20">
      <img className="max-w-8" src={`${import.meta.env.BASE_URL}assets/technologies/${icon}`} />
      <span>{title}</span>
    </div>
  );
};

TechnologyLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
