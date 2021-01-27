import React from "react";
import "./App.css";
import Test from "./Test";

import SideNav from "../components/SideNav/SideNavBar.jsx";
import Routes from "../components/Routes/routes";

const App = () => {
	return (
		<div className="Main-Container">
			{/* <LoginPage/> */}
			<div className="Main-ContainerWithSideNav">
				<SideNav />
				<Routes />
				{/* <UserProfile /> */}
				{/* <RecipeSearchBar /> */}
			</div>
		</div>
	);
};

export default App;
