/** @format */

import {combineReducers} from 'redux';

import {ADD_FOOD} from './actions';

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

const reducer = combineReducers({
  foodList: foodListReducer,
});

export default reducer;
