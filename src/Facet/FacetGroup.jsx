import React from 'react';
import FacetGroupTree from './FacetGroupTree';
import FacetGroupMultiSelect from './FacetGroupMultiSelect';
import './Facet.css'

const FacetGroup = ({ type, title, facets, tree }) => {
  let facetListing;
  switch (type) {
    case 'multi-select':
      facetListing = <FacetGroupMultiSelect facets={facets} />;
      break;
    default:
      facetListing = <FacetGroupTree facets={facets} tree={tree} />;
      break;
  }
  return (
    <div className="facet-group">
      <h1>{title}</h1>
      {facetListing}
    </div>
  );
};

export default FacetGroup;
