import React from "react";
import "./App.css";
import Test from "./Test";

import SideNav from "../components/SideNav/SideNavBar.jsx";
import RecipeSearchBar from "../components/RecipeSearchBar/reciepeSearchBar";
import Routes from "../components/Routes/routes";
import FrontPageRoutes from "../components/Routes/FrontPageRoutes.jsx";
import UserLoginView from "../components/UserForms/UserLoginView";

const App = () => {
	return (
		<div className="Main-Container">
			{/* <FrontPageRoutes /> */}
			<UserLoginView />
			{/* <div className="Main-ContainerWithSideNav">
				<SideNav />
				<Routes />
			</div> */}
		</div>
	);
};

export default App;
