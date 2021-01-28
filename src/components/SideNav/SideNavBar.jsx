import React from "react";
import "./SideNavBar.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remoteCookiesAction } from "../../Redux/Actions/login";

const SideNavBar = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const toUserProfile = () => {
		history.push("/userProfile");
	};

	const toSearchBar = () => {
		history.push("/searchbar");
	};

	const toAllRecipes = () => {
		history.push("/allrecipes");
	};

	const backToHome = () => {
		localStorage.clear();
		dispatch(remoteCookiesAction(false));
	};

	return (
		<div className="Main-sidebar-container">
			<div className="Main-sidebar-container-btn">
				<h1>Logo</h1>
			</div>

			<div className="Main-sidebar-container-btn Main-sidebar-container-group-btn">
				<button className="Sidebar-btn" onClick={toUserProfile}>
					Dashboard
				</button>

				<button className="Sidebar-btn" onClick={toAllRecipes}>
					All Recipes
				</button>

				<button className="Sidebar-btn" onClick={toSearchBar}>
					Search
				</button>

				<button className="Sidebar-btn" onClick={backToHome}>
					Logout
				</button>
			</div>
			<div className="Main-sidebar-container-btn"></div>
		</div>
	);
};

export default SideNavBar;
