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
						<h2>More Info</h2>A list of very long ingredients goes here!
						dcmlpkcmnp mcmqdmcknvj cbqihvivio qfkvofq
					</div>

					<div className="column middle">
						<h1>More Info</h1>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using 'Content here, content
						here',
					</div>

					<div className="column side">
						<h2>Ingredients</h2>A list of very long ingredients goes here!
						dcmlpkcmnp mcmqdmcknvj cbqihvivio qfkvofq
					</div>
				</div>
				<button onClick={() => addFavorite(recipe.id)}>add Favorite</button>
			</div>
		</div>
	);
};

export default RecipeDisplay;
