import PropTypes from "prop-types";

const ErrorMessage = ({ message = "Something went wrong" }) => {
  return <div data-testid="message-container">{message}</div>;
};

// Add prop validation
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired, // Requires `message` to be a string and non-null
};

export default ErrorMessage;
