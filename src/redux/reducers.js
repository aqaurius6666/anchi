/** @format */

import {combineReducers} from 'redux';

import {ADD_FOOD, ADD_INGREDIENT} from './actions';

const foodListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FOOD: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  foodList: foodListReducer,
  ingredients: ingredientsReducer,
});

export default reducer;
