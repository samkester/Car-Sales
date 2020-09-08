import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';
import { toggleFeature } from '../actions/carActions';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.filter(item => item.added).map(item => (
            <AddedFeature key={item.id} feature={item} onClick={props.toggleFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


export default connect((state) => { return {
  car: state.car,
  additionalFeatures: state.additionalFeatures
}}, {toggleFeature})(AddedFeatures);
