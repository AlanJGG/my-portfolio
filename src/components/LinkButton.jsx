import PropTypes from "prop-types";

export const LinkButton = ({ Icon, link, title }) => {
  return (
    <a
      className="inline-flex items-center justify-center bg-slate-300/25 hover:bg-slate-500/25 ease-in-out duration-300 p-2 2xl:p-4 rounded-full"
      href={link}
      target="_blank"
    >
      <Icon className="mr-2" style={{ fontSize: 28 }}/>
      <span className="antialised font-medium">{title}</span>
    </a>
  );
};

LinkButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};