import './Facet.css'
import FacetGroup from './FacetGroup'

const brandFacets = [
    {
      label: 'Healthcare Equipment',
      path: '/catalog/healthcare-equipment',
      count: 45,
    },
    {
      label: 'Foodservice',
      path: '/catalog/foodservice',
      count: 12,
    },
    {
      label: 'Rehabilitation',
      path: '/catalog/rehabilitation',
      count: 8,
    },
  ];
  
  const colorFacetsTree = [
    {
      label: 'Any Color',
      path: '/catalog/',
      isSelected: false,
    },
    {
      label: 'Puce',
      path: '/catalog/',
      isSelected: true,
    },
  ];
  
  const categoryFacets = [
    {
      label: 'Grabs Bars',
      path: '/catalog/healthcare-equipment-bathing-grab-bars',
      count: 45,
    },
    {
      label: 'Tub Accessories',
      path: '/catalog/healthcare-equipment-bathing-tub-accessories',
      count: 12,
    },
    {
      label: 'Bathing Lifts',
      path: '/catalog/healthcare-equipment-bathing-bathing-lifts',
      count: 8,
    },
  ];
  
  const categoryFacetsTree = [
    {
      label: 'Any Category',
      path: '/catalog/',
      isSelected: false,
    },
    {
      label: 'Healthcare Equipment',
      path: '/catalog/healthcare-equipment',
      isSelected: false,
    },
    {
      label: 'Bathing',
      path: '/catalog/healthcare-equipment-bathing',
      isSelected: true,
    },
  ];
  
  const attributeFacets = [
    {
      label: 'Free Shipping',
      path: '/catalog/?freeshipping=1',
      count: 45,
    },
    {
      label: 'Previously Purchased',
      path: '/catalog/?prevpurch=1',
      count: 12,
      isSelected: true,
    },
    {
      label: 'Preferred',
      path: '/catalog/?pref=1',
      count: 8,
    },
  ];
  
  const weightFacets = [
    {
      label: '175 to 300 lbs',
      count: 19,
      path: '/Search?weight=175-300',
    },
    {
      label: '450 to 850 lbs',
      count: 14,
      path: '/Search?weight=450-850',
    },
    {
      label: '875 to 1,100 lbs',
      count: 12,
      path: '/Search?weight=875-1000',
    },
  ];
  
  const heightFacets = [
    {
      label: '23 in',
      count: 19,
      path: '/Search?height=23',
    },
    {
      label: '35 in',
      count: 14,
      path: '/Search?weight=14',
    },
    {
      label: '45 in',
      count: 12,
      path: '/Search?weight=45',
    },
  ];
  
  const heightFacetsTree = [
    {
      label: 'Any Height',
      path: '//',
      isSelected: false,
    },
    {
      label: '20 to 50 in',
      path: '/catalog/',
      isSelected: true,
    },
  ];
  
  export default function Facet(){
    return( 
    <span>
        <FacetGroup title="Brands" facets={brandFacets} />
        <FacetGroup title="Color" tree={colorFacetsTree} />
        <FacetGroup title="Category" facets={categoryFacets} tree={categoryFacetsTree} />
        <FacetGroup title="Attributes" facets={attributeFacets} type="multi-select" />
        <FacetGroup title="Weight" facets={weightFacets} />
        <FacetGroup title="Height" facets={heightFacets} tree={heightFacetsTree} />
    </span>
    );
}
  
  