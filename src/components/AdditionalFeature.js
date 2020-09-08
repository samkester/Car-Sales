import React from 'react';

const AdditionalFeature = props => {
  const wrappedClick = () => {
    //console.log(props.feature)
    props.onClick(props.feature.id);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={wrappedClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
