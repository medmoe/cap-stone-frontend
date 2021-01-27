import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Test from "./Test";

import SideNav from "../components/SideNav/SideNavBar.jsx";
import RecipeSearchBar from "../components/RecipeSearchBar/reciepeSearchBar";
import Routes from "../components/Routes/routes";
// import FrontPageRoutes from "../components/Routes/FrontPageRoutes.jsx";
import UserMainFormContainer from "../components/UserForms/userMainFormContainer.jsx";

const App = () => {
	const [isLogin, setIsLogin] = useState(false);
	const handleIsLogin = () => {
		console.log("clicked");
		setIsLogin(!isLogin);
	};

	return (
		<div className="Main-Container">
			{isLogin ? (
				<div className="Main-ContainerWithSideNav">
					<SideNav />
					<Routes />
				</div>
			) : (
				<UserMainFormContainer handleIsLogin={handleIsLogin} />
			)}
		</div>
	);
};

export default App;
