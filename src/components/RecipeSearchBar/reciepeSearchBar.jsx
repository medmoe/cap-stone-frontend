import React from "react";
import "./reciepeSearchBar.css";
import axios from "axios";

const RecipeSearchBar = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await axios.get();

		console.log(response);
	};

	return (
		<div className="RecipeSearchBarMainContainer">
			<div className="RecipeSearchBarMiddleContainer">
				<form className="barContainer" onClick={handleSubmit}>
					<div className="theBar">
						<div className="barHeader">
							<h1>Let's find your desired recipe</h1>
						</div>

						<input
							className="searchBar"
							placeholder="Enter a recipe name"
							type="text"
						></input>

						<button>GET</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RecipeSearchBar;
