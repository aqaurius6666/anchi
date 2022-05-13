export const GET_FOOD_LIST = 'GET_FOOD_LIST';
export const ADD_FOOD = 'ADD_FOOD';

export const getFoodList = () => dispatch => {
  dispatch({
    type: GET_FOOD_LIST,
    payload: 0,
  });
};

export const addFood = newFood => dispatch => {
  dispatch({
    type: ADD_FOOD,
    payload: newFood,
  });
};
