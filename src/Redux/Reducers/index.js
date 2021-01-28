import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import allRecipesReducer from "./AllRecipes";
import singleRecipeReducer from "./SingleRecipe";

const allReducers = combineReducers({
	currentUserReducer,
	allRecipesReducer,
	singleRecipeReducer

});

export default allReducers;
