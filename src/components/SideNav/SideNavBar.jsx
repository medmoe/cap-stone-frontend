import React from "react";
import "./SideNavBar.css";
import { Link, useHistory } from "react-router-dom";

const SideNavBar = () => {
	const history = useHistory();

	const toUserProfile = () => {
		history.push("/userProfile");
	};

	const toSearchBar = () => {
		history.push("/searchbar");
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

				<button className="Sidebar-btn" onClick={toSearchBar}>
					Search
				</button>
			</div>
			<div className="Main-sidebar-container-btn">
				<button className="Sidebar-btn">Logout</button>
			</div>
		</div>
	);
};

export default SideNavBar;
