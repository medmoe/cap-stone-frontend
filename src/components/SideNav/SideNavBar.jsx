import React from "react";
import "./SideNavBar.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remoteCookiesAction } from "../../Redux/Actions/login";
import RecipeBoardLogo from "./RecipeBoardLogo.png";

const SideNavBar = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const currentUser = useSelector(
		(state) => state.currentUserReducer.currentUser
	);
	const toUserProfile = () => {
		history.push("/userProfile");
	};

	const toSearchBar = () => {
		history.push("/searchbar");
	};

	const toAllRecipes = () => {
		history.push("/allrecipes");
	};

	const backToHome = async () => {
		localStorage.clear();
		dispatch(remoteCookiesAction(false));
		console.log(currentUser);
		const response = await axios.post(
			"http://localhost:8080/api/users/logout",
			currentUser.user
		);
		history.push("/signUp");
		console.log(response);
	};

	const toRecipeCreator = () => {
		history.push("/recipecreator");
	};

	return (
		<div className="Main-sidebar-container">
			<div className="Main-sidebar-container-btn">
				{/* <h1>Recipe Board</h1> */}
				<img src={RecipeBoardLogo} alt="img" className="logo" />
			</div>

			<div className="Main-sidebar-container-btn Main-sidebar-container-group-btn">
				<button className="Sidebar-btn" onClick={toUserProfile}>
					Dashboard
				</button>

				<button className="Sidebar-btn" onClick={toRecipeCreator}>
					Creator
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
