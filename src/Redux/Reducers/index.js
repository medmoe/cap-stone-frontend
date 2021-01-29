import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import allRecipesReducer from "./AllRecipes";
import singleRecipeReducer from "./SingleRecipe";
import isLoginReducer from "./loginReducer";

const allReducers = combineReducers({
	currentUserReducer,
	allRecipesReducer,
	singleRecipeReducer,
  isLoginReducer,
});

export default allReducers;
