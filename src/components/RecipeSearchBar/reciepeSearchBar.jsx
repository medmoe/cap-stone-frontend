import React, { useState } from "react";
import "./reciepeSearchBar.css";
import { useHistory } from "react-router-dom";

const RecipeSearchBar = () => {
	const [search, setSearch] = useState("");
	const history = useHistory();

	const HandleSubmit = (e) => {
		e.preventDefault();
		history.push(`/recipes/recipeid/${search}`);
	};

	const handleQuery = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="RecipeSearchBarMainContainer">
			<div className="RecipeSearchBarMiddleContainer">
				<form className="barContainer" onSubmit={HandleSubmit}>
					<div className="theBar">
						<div className="barHeader">
							<h1>Let's find your desired recipe</h1>
						</div>

						<input
							className="searchBar"
							placeholder="Enter a recipe name"
							type="text"
							onChange={handleQuery}
							value={search}
						></input>

						<button>Search</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RecipeSearchBar;
