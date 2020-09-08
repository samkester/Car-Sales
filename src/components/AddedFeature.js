import React from 'react';

const AddedFeature = props => {
  const wrappedClick = () => {
    //console.log(props.feature)
    props.onClick(props.feature.id);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={wrappedClick}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
