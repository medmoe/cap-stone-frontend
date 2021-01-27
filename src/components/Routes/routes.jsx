import React from "react";
import { Route, Switch } from "react-router-dom";
import RecipeSearchBar from "../RecipeSearchBar/reciepeSearchBar";
import UserProfile from "../Display/userProfile";
import AllRecipes from "../AllRecipes/AllRecipes";
import RecipeDisplay from "../RecipeDisplay/RecipeDisplay";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/searchbar">
				<RecipeSearchBar />
			</Route>
			<Route exact path="/userProfile">
				<UserProfile />
			</Route>
			
			<Route exact path = "/allrecipes">
				<AllRecipes />
			</Route>

			<Route exact path = "/recipe">
				<RecipeDisplay />
			</Route>
		</Switch>
	);
};

export default Routes;
