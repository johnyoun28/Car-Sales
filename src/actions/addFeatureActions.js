export const ADD_FEATURE = 'ADD_FEATURE';
export const DELETE_FEATURE = 'DELETE_FEATURE';

export const addFeature = (newFeature) => {
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
};

export const deleteFeature = (oldFeature) => {
  return {
    type: DELETE_FEATURE,
    payload: oldFeature,
  };
};
