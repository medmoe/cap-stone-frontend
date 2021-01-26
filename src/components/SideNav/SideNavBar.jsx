import React from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	return (
		<div className="Main-sidebar-container">
			<div className="Main-sidebar-container-btn">
				<h1>Logo</h1>
			</div>

			<div className="Main-sidebar-container-btn Main-sidebar-container-group-btn">
				<button className="Sidebar-btn">Dashboard</button>

				<button className="Sidebar-btn">Search</button>
			</div>
			<div className="Main-sidebar-container-btn">
				<button className="Sidebar-btn">Logout</button>
			</div>
		</div>
	);
};

export default SideNavBar;
