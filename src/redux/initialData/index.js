import {FOOD_DATA} from './foodData';
import {TAG_DATA} from './tagData';
import {INGREDIENT_DATA} from './ingredientData';
import {RESTAURANT_DATA} from './restaurantData';

export const InitialState = {
  FOOD_DATA,
  TAG_DATA,
  INGREDIENT_DATA,
  RESTAURANT_DATA,
};

export const FAVORITE_DATA = {food: [1, 3], store: [1, 2]};

export const BLACKLIST_DATA = {
  food: [2, 4],
  store: [],
};
