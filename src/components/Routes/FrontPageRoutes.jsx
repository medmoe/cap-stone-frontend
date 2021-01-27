import React from "react";
import { Route, Switch } from "react-router-dom";
import UserLoginView from "../UserForms/UserLoginView";
import UserRegistrationView from "../UserForms/UserRegistrationView";

const FrontPageRoutes = () => {
	return (
		<Switch>
			<Route exact path="/userLoginPage">
				<UserLoginView />
			</Route>
			<Route exact path="/userSignUpPage">
				<UserRegistrationView />
			</Route>
		</Switch>
	);
};

export default FrontPageRoutes;
