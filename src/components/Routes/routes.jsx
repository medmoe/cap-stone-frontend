import React from "react";
import { Route, Switch } from "react-router-dom";
import RecipeSearchBar from "../RecipeSearchBar/reciepeSearchBar";
import UserProfile from "../Display/userProfile";
import RecipeDisplay from "../RecipeDisplay/RecipeDisplay";
import AllRecipesView from "../AllRecipes/AllRecipesView";
import UserRegistrationView from "../UserForms/UserRegistrationView";
import UserLoginView from "../UserForms/UserLoginView";
import RecipeCreator from "../Display/recipeCreator";

const InRoutes = () => {
	return (
		<Switch>
			<Route exact path="/userProfile" component={UserProfile}></Route>
			<Route exact path="/signUp" component={UserRegistrationView}></Route>s
			{/* <Route exact path="/allrecipes" component={AllRecipes}></Route> */}
			<Route exact path="/searchBar" component={RecipeSearchBar}></Route>
			<Route exact path="/recipe" component={RecipeDisplay}></Route>
			<Route exact path="/signIn" component={UserLoginView}></Route>
			<Route excat path="/recipecreator" component={RecipeCreator}></Route>
			<Route exact path="/allrecipes">
				<AllRecipesView />
			</Route>
			<Route exact path="/recipe" component={RecipeDisplay}></Route>
			<Route
				exact
				path="/recipes/recipeid/:id"
				component={RecipeDisplay}
			></Route>
		</Switch>
	);
};

export default InRoutes;
