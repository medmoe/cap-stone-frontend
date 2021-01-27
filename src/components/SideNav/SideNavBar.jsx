import React from "react";
import "./SideNavBar.css";
import { Link, useHistory } from "react-router-dom";
import "../../fontawesome-free-5.15.2-web/css/all.css";

const SideNavBar = () => {
	const history = useHistory();

	const toUserProfile = () => {
		history.push("/userProfile");
	};

	const toSearchBar = () => {
		history.push("/searchbar");
	};

	const toAllRecipes = () => {
		history.push("/allrecipes")
	}

	return (
		<div className="Main-sidebar-container">
			<div className="Main-sidebar-container-btn">
				<h1>Logo</h1>
			</div>

			{/* <div>
				<form>
					<Link to = "/allrecipes">All Recipes</Link>
					<br></br>
				</form>
			</div> */}




			<div className="Main-sidebar-container-btn Main-sidebar-container-group-btn">
				<button className="Sidebar-btn" onClick={toUserProfile}>
					Dashboard
				</button>

				<button className = "Sidebar-btn" onClick = {toAllRecipes}>
					All Recipes
				</button>

				<button className="Sidebar-btn" onClick={toSearchBar}>
					Search
				</button>


				<button className="Sidebar-btn">Logout</button>

				{/* <i class="fas fa-search"></i> */}

			</div>
			<div className="Main-sidebar-container-btn">
				
			</div>
		</div>
	);
};

export default SideNavBar;
