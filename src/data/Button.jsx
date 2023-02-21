import PropTypes from "prop-types";

function Button({ children, version, type, isDasabled }) {
  return (
    <button type={type} disabled={isDasabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "buton",
  isDasabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
