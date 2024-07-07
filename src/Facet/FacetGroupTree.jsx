import React from 'react';
import FacetLink from './FacetLink';
import './Facet.css'

const FacetGroupTree = ({ facets, tree }) => {
  let facetNodes = [];
  let overallBuild;

  if (facets) {
    facetNodes = facets.map((facet) => (
      <li key={facet.path}>
        <FacetLink label={facet.label} count={facet.count} path={facet.path} />
      </li>
    ));
  }

  overallBuild = facetNodes;

  if (tree) {
    tree.reverse().forEach((treeNode) => {
      const cn = treeNode.isSelected ? (
        <span className="x-selected">{treeNode.label}</span>
      ) : (
        <a href={treeNode.path} className="x-undo">{treeNode.label}</a>
      );
      overallBuild = (
        <li key={treeNode.path}>
          {cn}
          <ul>{overallBuild}</ul>
        </li>
      );
    });
  }

  return <ul>{overallBuild}</ul>;
};

export default FacetGroupTree;
