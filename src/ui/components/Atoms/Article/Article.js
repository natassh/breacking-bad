import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ phrase, className }) => (
  <article className={className}>
    <h1>{phrase.quote}</h1>
    <p>{phrase.author}</p>
  </article>
);

export default Article;

Article.propTypes = {
  phrase: PropTypes.object,
  className: PropTypes.node
};
