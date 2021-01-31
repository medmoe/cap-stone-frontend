import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import SideNav from "../components/SideNav/SideNavBar.jsx";
import UserMainFormContainer from "../components/UserForms/userMainFormContainer.jsx";
import Routes from "../components/Routes/routes.jsx";
import { addCookiesAction } from "../Redux/Actions/login";
import { addCurrentUserToStateAction } from "../Redux/Actions/currentUser";

const App = () => {
	const dispatch = useDispatch();

	const isLogin = useSelector((state) => state.isLoginReducer.isLogin);
	useEffect(async () => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.get(
				`http://localhost:8080/api/users/login/${token}`
			);

			if (response.data.loggedIn === true) {
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
				</>
			)}
		</div>
	);
};

export default App;
