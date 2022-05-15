/** @format */

import {combineReducers} from 'redux';

import {ADD_FOOD, ADD_INGREDIENT} from './actions';

import {
  FOOD_DATA,
  RESTAURANT_DATA,
  TAG_DATA,
  INGREDIENT_DATA,
  FAVORITE_DATA,
  BLACKLIST_DATA,
} from './initialData';

const foodReducer = (state = FOOD_DATA, action) => {
  switch (action.type) {
    case ADD_FOOD: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const restaurantReducer = (state = RESTAURANT_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const tagsReducer = (state = TAG_DATA, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

const ingredientsReducer = (state = INGREDIENT_DATA, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return [...state, action.payload];
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

const reducer = combineReducers({
  food: foodReducer,
  restaurant: restaurantReducer,
  tag: tagsReducer,
  ingredients: ingredientsReducer,
  favorite: favoriteReducer,
  blacklist: blacklistReducer,
});

export default reducer;
