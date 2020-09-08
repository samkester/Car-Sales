import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import {toggleFeature} from "../actions/carActions";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.filter(item => !item.added).map(item => (
            <AdditionalFeature key={item.id} feature={item} onClick={props.toggleFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect((state) => { return {
  additionalFeatures: state.additionalFeatures
}}, {toggleFeature})(AdditionalFeatures);

