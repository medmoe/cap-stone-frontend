import React from "react";

const FavoriteRecipe = (props) => {
	return (
		<div>
			<h1>{props.recipe.name}</h1>
			<h1>{props.recipe.image}</h1>
			<h1>{props.recipe.area}</h1>
			<h1>{props.recipe.category}</h1>
			<h1>{props.recipe.all_ingredients}</h1>
		</div>
	);
};

export default FavoriteRecipe;
