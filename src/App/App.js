import React from "react";
import "./App.css";
import Test from "./Test";
import UserProfile from "../components/Display/userProfile.jsx";
import SideNav from "../components/SideNav/SideNavBar.jsx";

const App = () => {
	return (
		<div className="Main-Container">
			{/* <LoginPage/> */}
			<div className="Main-ContainerWithSideNav">
				<SideNav />
				<UserProfile />
			</div>
		</div>
	);
};

export default App;
