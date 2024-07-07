import React from 'react';
import FacetLabel from './FacetLabel';
import './Facet.css'

const FacetGroupMultiSelect = ({ facets }) => {
  const rows = facets.map((facet) => {
    const checked = facet.isSelected ? true : false;
    const name = facet.label.replace(/[^\w+]/g, '-');
    return (
      <li key={name}>
        <input type="checkbox" checked={checked} id={name} readOnly />
        <FacetLabel forInput={name} label={facet.label} count={facet.count} />
      </li>
    );
  });

  return <ul>{rows}</ul>;
};

export default FacetGroupMultiSelect;
