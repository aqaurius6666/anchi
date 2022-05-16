export const CREATE_FOOD = 'CREATE_FOOD';
export const CREATE_INGREDIENT = 'CREATE_INGREDIENT';
export const CREATE_TAG = 'CREATE_TAG';
export const FLUSH_LOCAL = 'FLUSH_LOCAL';

export const createFood = newFood => dispatch => {
  dispatch({
    type: CREATE_FOOD,
    payload: newFood,
  });
};

export const createIngredient = newIngredient => dispatch => {
  dispatch({
    type: CREATE_INGREDIENT,
    payload: newIngredient,
  });
};

export const createTag = newTag => dispatch => {
  dispatch({
    type: CREATE_TAG,
    payload: newTag,
  });
};

export const flushLocal = () => dispatch => {
  dispatch({
    type: FLUSH_LOCAL,
    payload: null,
  });
};
