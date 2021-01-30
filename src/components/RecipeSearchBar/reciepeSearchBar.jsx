import axios from "axios";
import React, { useState } from "react";
import "./reciepeSearchBar.css";
import { useHistory } from "react-router-dom";
import RecipeDisplay from "../RecipeDisplay/RecipeDisplay";

const RecipeSearchBar = () => {
	const history = useHistory();

	const [search, setSearch] = useState("");
	const [isCliked, setIsClicked] = useState(false);
	const [singleRecipe, setSingleRecipe] = useState([]);

	const HandleSubmit = (e) => {
		e.preventDefault();

		axios
			.get(`http://localhost:8080/api/recipes/recipeid/${search}`)
			.then((results) => {
				setSingleRecipe(results.data);
			})
			.catch((error) => console.log(error));
		setIsClicked(true);
	};

	const handleQuery = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="RecipeSearchBarMainContainer">
			{!isCliked ? (
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
			) : (
				<RecipeDisplay recipe={singleRecipe} />
			)}
		</div>
	);
};

export default RecipeSearchBar;
