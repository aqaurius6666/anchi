/** @format */

import {combineReducers} from 'redux';

import {GET_FOOD_LIST} from './actions';

const foodListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FOOD_LIST: {
      return state;
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
