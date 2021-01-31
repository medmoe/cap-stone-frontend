import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import allRecipesReducer from "./AllRecipes";
import singleRecipeReducer from "./SingleRecipe";
import isLoginReducer from "./loginReducer";
import currentPageReducer from "./currentPage";

const allReducers = combineReducers({
	currentUserReducer,
	allRecipesReducer,
	singleRecipeReducer,
	isLoginReducer,
	currentPageReducer,
});

export default allReducers;
