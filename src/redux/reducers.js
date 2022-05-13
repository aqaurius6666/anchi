/** @format */

import {combineReducers} from 'redux';

import {GET_FOOD_LIST, ADD_FOOD} from './actions';

const foodListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FOOD_LIST: {
      return state;
    }
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
