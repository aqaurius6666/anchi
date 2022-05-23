/** @format */

import { combineReducers } from 'redux';

import {
  CREATE_FOOD,
  CREATE_RESTAURANT,
  CREATE_INGREDIENT,
  CREATE_TAG,
  DELETE_TAG,
  SET_TAG,
  ADD_FOOD_TO_FAVORITE,
  REMOVE_FOOD_FROM_FAVORITE,
  ADD_RESTAURANT_TO_FAVORITE,
  REMOVE_RESTAURANT_FROM_FAVORITE,
  ADD_FOOD_TO_BLACKLIST,
  ADD_RESTAURANT_TO_BLACKLIST,
  FLUSH_LOCAL,
} from './actions';

import { InitialState } from './initialData/index';

const foodReducer = (state = InitialState.FOOD_DATA, action) => {
  switch (action.type) {
    case CREATE_FOOD: {
      return {
        data: [...state.data, { ...action.payload, id: state.lastKey + 1 }],
        lastKey: state.lastKey + 1,
      };
    }
    default: {
      return state;
    }
  }
};

const restaurantReducer = (state = InitialState.RESTAURANT_DATA, action) => {
  switch (action.type) {
    case CREATE_RESTAURANT: {
      return {
        data: [...state.data, { ...action.payload, id: state.lastKey + 1 }],
        lastKey: state.lastKey + 1,
      };
    }
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
        data: state.data.filter(x => x.id !== action.payload),
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

const favoriteReducer = (state = InitialState.FAVORITE_DATA, action) => {
  switch (action.type) {
    case ADD_FOOD_TO_FAVORITE: {
      if (!state.food.some(item => item === action.payload)) {
        return { ...state, food: [...state.food, action.payload] };
      }
      return state;
    }
    case REMOVE_FOOD_FROM_FAVORITE: {
      return {
        ...state,
        food: state.food.filter(item => item !== action.payload),
      };
    }
    case ADD_RESTAURANT_TO_FAVORITE: {
      if (!state.restaurant.some(item => item === action.payload)) {
        return { ...state, restaurant: [...state.restaurant, action.payload] };
      }
      return state;
    }
    case REMOVE_RESTAURANT_FROM_FAVORITE: {
      return {
        ...state,
        restaurant: state.restaurant.filter(item => item !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

const blacklistReducer = (state = InitialState.BLACKLIST_DATA, action) => {
  switch (action.type) {
    case ADD_FOOD_TO_BLACKLIST:
      if (!state.food.some(item => item === action.payload)) {
        return {...state, food: [...state.food, action.payload]};
      } else {
        console.log('That food is already in the blacklist');
      }
      return state;
    case ADD_RESTAURANT_TO_BLACKLIST: {
      if (!state.restaurant.some(item => item === action.payload)) {
        return {...state, restaurant: [...state.restaurant, action.payload]};
      } else {
        console.log('That restaurant is already in the blacklist');
      }
      return state;
    }
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
