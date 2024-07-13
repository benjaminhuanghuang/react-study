import React from "react";

const Article = ({ title, teaser, publishDate }) => (
  <>
    <h1>{title}</h1>
    <h2>{teaser}</h2>
    <h3>{publishDate}</h3>
  </>
);

export default Article;
