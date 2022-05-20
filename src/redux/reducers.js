/** @format */

import { combineReducers } from 'redux';

import {
  CREATE_FOOD,
  CREATE_INGREDIENT,
  CREATE_TAG,
  DELETE_TAG,
  FLUSH_LOCAL,
  SET_TAG,
} from './actions';

import { FAVORITE_DATA, BLACKLIST_DATA, InitialState } from './initialData/index';

const foodReducer = (state = InitialState.FOOD_DATA, action) => {
  switch (action.type) {
    case CREATE_FOOD: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const restaurantReducer = (state = InitialState.RESTAURANT_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const tagsReducer = (state = InitialState.TAG_DATA, action) => {
  switch (action.type) {
    case CREATE_TAG: {
      const newKey = state.lastKey + 1;
      return {
        lastKey: newKey,
        data: [...state.data, { title: action.payload, id: newKey }],
      };
    }

    case DELETE_TAG: {
      return {
        data: state.data.filter((x) => x.id !== action.payload),
      };
    }

    case SET_TAG: {
      return {
        lastKey: action.payload.size,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

const ingredientsReducer = (state = InitialState.INGREDIENT_DATA, action) => {
  switch (action.type) {
    case CREATE_INGREDIENT: {
      const newKey = state.lastKey + 1;
      return {
        lastKey: newKey,
        data: [...state.data, { title: action.payload, id: newKey }],
      };
    }
    default: {
      return state;
    }
  }
};

const favoriteReducer = (state = FAVORITE_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const blacklistReducer = (state = BLACKLIST_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  foods: foodReducer,
  restaurants: restaurantReducer,
  tags: tagsReducer,
  ingredients: ingredientsReducer,
  favorite: favoriteReducer,
  blacklist: blacklistReducer,
});

const reducer = (state, action) => {
  switch (action.type) {
    case FLUSH_LOCAL: {
      return rootReducer(undefined, action);
    }
    default: {
      return rootReducer(state, action);
    }
  }
};

export default reducer;
