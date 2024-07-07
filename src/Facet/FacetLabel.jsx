import React from 'react';
import './Facet.css'
const FacetLabel = ({ forInput, label, count }) => (
  <span className="facet">
    <label htmlFor={forInput}>{label}</label>&nbsp;<span className="facet-count">({count})</span>
  </span>
);

export default FacetLabel;
