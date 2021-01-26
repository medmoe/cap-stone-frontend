import React from "react";
import { Route, Switch } from "react-router-dom";
import RecipeSearchBar from "../RecipeSearchBar/reciepeSearchBar";
import UserProfile from "../Display/userProfile";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/searchbar">
				<RecipeSearchBar />
			</Route>
			<Route exact path="/userProfile">
				<UserProfile />
			</Route>
		</Switch>
	);
};

export default Routes;
