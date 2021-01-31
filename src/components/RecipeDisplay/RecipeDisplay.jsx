import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDisplay.css";

const RecipeDisplay = () => {
	const [recipe, setRecipe] = useState({});
	const { id } = useParams();
	const userInfo = useSelector((state) => state.currentUserReducer.currentUser);

	useEffect(async () => {
		const response = await axios.get(
			`http://localhost:8080/api/recipes/recipename/${id}`
		);
		setRecipe(response.data);
	}, []);

	const addFavorite = (recipeID) => {
		let email = userInfo.user;
		console.log(email);
		axios.post(
			`http://localhost:8080/api/recipes/add-to-favorite/${recipeID}`,
			email
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
						<h2 className = "medium-text">Area</h2>
						<p className = "small-text">{recipe.area}</p>
					</div>

					<div className="column middle">
						<h1 className = "medium-text">Ingredients</h1>
						<p className = "small-text">{recipe.all_ingredients}</p>
						
					</div>

					<div className="column side">
						<h2 className = "medium-text">Category</h2>
						<p className = "small-text">{recipe.category}</p>
					</div>
				</div>
				<button onClick={() => addFavorite(recipe.id)}>add Favorite</button>
			</div>
		</div>
	);
};

export default RecipeDisplay;
