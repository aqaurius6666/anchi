export const SET_TAG = 'SET_TAG';
export const CREATE_FOOD = 'CREATE_FOOD';
export const CREATE_INGREDIENT = 'CREATE_INGREDIENT';
export const CREATE_TAG = 'CREATE_TAG';
export const FLUSH_LOCAL = 'FLUSH_LOCAL';
export const DELETE_TAG = 'DELETE_TAG';

export const setTag = tag => dispatch => {
  dispatch({
    type: SET_TAG,
    payload: tag, // tag is already an array, eg [{"id": 104, "title": "món Đức"}]
  });
};

export const createFood = newFood => dispatch => {
  dispatch({
    type: CREATE_FOOD,
    payload: newFood,
  });
};

export const createTag = newTag => dispatch => {
  dispatch({
    type: CREATE_TAG,
    payload: newTag,
  });
};

export const createIngredient = newIngredient => dispatch => {
  dispatch({
    type: CREATE_INGREDIENT,
    payload: newIngredient,
  });
};

export const deleteTag = oldTag => dispatch => {
  dispatch({
    type: DELETE_TAG,
    payload: oldTag,
  });
};

export const flushLocal = () => dispatch => {
  dispatch({
    type: FLUSH_LOCAL,
    payload: null,
  });
};
