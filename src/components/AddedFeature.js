import React from 'react';
import { deleteFeature } from '../actions/addFeatureActions';
import { connect } from 'react-redux';

export const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.deleteFeature(props.feature);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    deleteFeature: state.deleteFeature,
  };
};

export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
