import React from 'react';
import { connect } from 'react-redux';

const addedCost = features => 
  features.filter(item => item.added)
  .reduce((prev, current) => Number(prev) + Number(current.price), 0);

const Total = props => {
  //console.log(props.car.price);
  //console.log(addedCost(props.additionalFeatures));
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + addedCost(props.additionalFeatures)}</h4>
    </div>
  );
};

export default connect((state) => { return {
  car: state.car,
  additionalFeatures: state.additionalFeatures
}}, {})(Total);
