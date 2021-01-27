import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Test from "./Test";

import SideNav from "../components/SideNav/SideNavBar.jsx";
import RecipeSearchBar from "../components/RecipeSearchBar/reciepeSearchBar";
import InRoutes from "../components/Routes/routes";
// import FrontPageRoutes from "../components/Routes/FrontPageRoutes.jsx";
import UserMainFormContainer from "../components/UserForms/userMainFormContainer.jsx";
import Routes from "../components/Routes/routes.jsx";
import { addCookiesAction } from "../Redux/Actions/login";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("name");
		if (loggedInUser) {
			dispatch(addCookiesAction(true));
		}
	}, []);

	const isLogin = useSelector((state) => state.isLoginReducer.isLogin);

	return (
		<div className="Main-Container">
			{isLogin ? (
				<div className="Main-ContainerWithSideNav">
					<SideNav />
					<Routes />
				</div>
			) : (
				<UserMainFormContainer />
			)}
		</div>
	);
};

export default App;
