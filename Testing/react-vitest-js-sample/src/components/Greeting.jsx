import PropTypes from 'prop-types';

const Greeting = ({name}) => {
  return <h1>Hello, {name || "world"}!</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
