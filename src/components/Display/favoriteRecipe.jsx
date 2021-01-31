import React from "react";
import "./favoriteRecipe.css";

const FavoriteRecipe = (props) => {
	return (
		<div className="recipe-container">
			<h1>{props.recipe.name}</h1>
			<img className="recipeImg" src={props.recipe.image} />
			<h1>{props.recipe.area}</h1>
			<h1>{props.recipe.category}</h1>
		</div>
	);
};

export default FavoriteRecipe;
