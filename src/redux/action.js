export const GET_FOOD_LIST = 'GET_FOOD_LIST';

export const getFoodList = () => dispatch => {
  dispatch({
    type: GET_FOOD_LIST,
    payload: 0,
  });
};
