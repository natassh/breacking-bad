import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Generar frase</button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func
};
