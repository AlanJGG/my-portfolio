import PropTypes from "prop-types";

export const Button = ({ title, onclick, Icon }) => {
  return (
    <button
      className="flex border-1 border-slate-800 items-center justify-between bg-slate-300/25 hover:bg-slate-500/25 hover:shadow-slate-800 hover:shadow-md  ease-in-out duration-300 p-2 rounded-full max-w-[200px] w-full"
      onClick={onclick}
      target="_blank"
    >
      <span className="flex-1 text-center antialised font-medium">{title}</span>
      <Icon className="ml-auto" style={{ fontSize: 24 }} />
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
