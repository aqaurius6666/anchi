export const ADD_FOOD = 'ADD_FOOD';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export const addFood = newFood => dispatch => {
  dispatch({
    type: ADD_FOOD,
    payload: newFood,
  });
};

export const addIngredient = newIngredient => dispatch => {
  dispatch({
    type: ADD_INGREDIENT,
    payload: newIngredient,
  });
};
