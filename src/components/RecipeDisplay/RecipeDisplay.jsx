import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDisplay.css";

const RecipeDisplay = () => {
	const [recipe, setRecipe] = useState({});
	const { id } = useParams();
	const email = localStorage.getItem("email");

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(
				`https://recipe-board.herokuapp.com/api/recipes/recipename/${id}`
			);
			setRecipe(response.data);
		}
		fetchData();
		// eslint-disable-next-line
	}, []);

	const addFavorite = (recipeID) => {
		let emails = {
			email,
		};
		axios.post(
			`https://recipe-board.herokuapp.com/api/recipes/add-to-favorite/${recipeID}`,
			emails
		);
	};

	return (
		<div className="RecipeMainContainer">
			{/* <button onClick={this.addToFavorites} value={this.props.singleRecipe.id}>
				Add To Favorites
			</button> */}
			<div className="RecipeMain">
				<img
					className="RecipeDisplayImage"
					src={recipe.image}
					alt="Some Good Food"
				/>
				<h1 className="RecipeNameText">{recipe.name}</h1>
				<h1 className="RecipeDescriptionText">{recipe.instructions}</h1>

				<div className="row">
					<div className="column side">
						<h2 className="medium-text">Area</h2>
						<p className="small-text">{recipe.area}</p>
					</div>

					<div className="column middle">
						<h1 className="medium-text">Ingredients</h1>
						<p className="small-text">{recipe.all_ingredients}</p>
					</div>

					<div className="column side">
						<h2 className="medium-text">Category</h2>
						<p className="small-text">{recipe.category}</p>
					</div>
				</div>
				<button onClick={() => addFavorite(recipe.id)}>add Favorite</button>
			</div>
		</div>
	);
};

export default RecipeDisplay;
