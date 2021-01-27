import React from "react";
import { Route, Switch } from "react-router-dom";
import RecipeSearchBar from "../RecipeSearchBar/reciepeSearchBar";
import UserProfile from "../Display/userProfile";
import AllRecipes from "../AllRecipes/AllRecipes";
import RecipeDisplay from "../RecipeDisplay/RecipeDisplay";
import UserRegistrationView from "../UserForms/UserRegistrationView";
import UserLoginView from "../UserForms/UserLoginView";

const InRoutes = () => {
	return (
		<Switch>
			<Route exact path="/signUp">
				<UserRegistrationView />
			</Route>
			<Route exact path="/userProfile">
				<UserProfile />
			</Route>
			<Route exact path="/allrecipes">
				<AllRecipes />
			</Route>
			<Route exact path="/searchBar">
				<RecipeSearchBar />
			</Route>
			<Route exact path="/recipe">
				<RecipeDisplay />
			</Route>
			<Route exact path="/signUp">
				<UserRegistrationView />
			</Route>
			<Route exact path="/signIn">
				<UserLoginView />
			</Route>
		</Switch>
	);
};

export default InRoutes;
