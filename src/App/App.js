import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import SideNav from "../components/SideNav/SideNavBar.jsx";
import UserMainFormContainer from "../components/UserForms/userMainFormContainer.jsx";
import Routes from "../components/Routes/routes.jsx";
import { addCookiesAction } from "../Redux/Actions/login";
import { addCurrentUserToStateAction } from "../Redux/Actions/currentUser";
import axios from "axios";
import { Redirect } from "react-router-dom";

const App = () => {
	const dispatch = useDispatch();

	const isLogin = useSelector((state) => state.isLoginReducer.isLogin);
	useEffect(async () => {
		try {
			const response = await axios.get("http://localhost:8080/api/users/login");
			console.log(response);
			if (response.data.loggedIn === true) {
				console.log(response.data.loggedIn);
				console.log(response.data.user);
				dispatch(addCookiesAction(response.data.loggedIn));
				dispatch(addCurrentUserToStateAction(response.data.user));
			}
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="Main-Container">
			{isLogin ? (
				<div className="Main-ContainerWithSideNav">
					<SideNav />

					<Routes />
				</div>
			) : (
				<>
					<UserMainFormContainer />
					<Redirect to="/signUp" />
				</>
			)}
		</div>
	);
};

export default App;
