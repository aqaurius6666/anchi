export const ADD_FOOD = 'ADD_FOOD';

export const addFood = newFood => dispatch => {
  dispatch({
    type: ADD_FOOD,
    payload: newFood,
  });
};
