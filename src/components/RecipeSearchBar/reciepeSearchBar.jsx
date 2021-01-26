import React from "react";
import "./reciepeSearchBar.css";

const RecipeSearchBar = () => {
	return (
		<div className="RecipeSearchBarMainContainer">
			<div className="RecipeSearchBarMiddleContainer">
				<form className="barContainer">
					<div className="theBar">
						<div className="barHeader">
							<h1>Let's find your desired recipe</h1>
						</div>

						<input
							className="searchBar"
							placeholder="Enter a recipe name"
							type="text"
						></input>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RecipeSearchBar;
