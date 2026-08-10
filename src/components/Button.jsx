import PropTypes from 'prop-types';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
