import React from 'react';
import PropTypes from 'prop-types';
import './Quote.css';

const Quote = ({ phrase, className }) => (
  <figure className={className}>
    <blockquote>{phrase.quote}</blockquote>
    <figcaption>
      <cite>{phrase.author}</cite>
    </figcaption>
  </figure>
);

export default Quote;

Quote.propTypes = {
  phrase: PropTypes.object,
  className: PropTypes.node
};
