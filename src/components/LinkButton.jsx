import PropTypes from "prop-types";

export const LinkButton = ({ Icon, link, title }) => {
  return (
    <a
      className=" inline-flex items-center justify-center bg-slate-800/25 hover:bg-slate-500/25 focus:bg-slate-500/25 ease-in-out duration-300 p-3 2xl:px-4 rounded-full"
      href={link}
      target="_blank"
    >
      <Icon style={{ fontSize: 28 }} />
      {title ? (
        <span className="hidden lg:flex antialised font-medium ml-2">{title}</span>
      ) : null}
    </a>
  );
};

LinkButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
};
