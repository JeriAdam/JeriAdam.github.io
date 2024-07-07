import React from 'react';
import './Facet.css'
const FacetLink = ({ label, path, count }) => (
  <span className="facet">
    <a href={path}>{label}</a>&nbsp;<span className="facet-count">({count})</span>
  </span>
);

export default FacetLink;
