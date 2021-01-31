import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./AllRecipes.css";
import axios from "axios";

const AllRecipesView = () => {
	const [allRecipes, setAllRecipes] = useState([]);
	const history = useHistory();

	useEffect(async () => {
		const response = await axios.get(
			"https://recipe-board.herokuapp.com/api/recipes"
		);
		console.log("sss", response.data.allRecipes);
		setAllRecipes(response.data.allRecipes);
	}, []);

	const toSingleRecipe = (name) => {
		history.push(`/recipes/recipeid/${name}`);
	};

	return (
		<div className="AllRecipesContainer">
			{allRecipes ? (
				allRecipes.map((result, index) => (
					<div className="container" key={index}>
						<img className="container__image" src={result.image} alt="Food" />

						<div className="container__text">
							<h2
								onClick={() => toSingleRecipe(result.name)}
								className="Dish-Name"
							>
								{result.name}
							</h2>

							<h2 className="Dish-Desc">Category: {result.category}</h2>
						</div>
					</div>
				))
			) : (
				<h1>LOADING...</h1>
			)}
		</div>
	);
};

export default AllRecipesView;
