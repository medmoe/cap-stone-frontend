import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const AreaOrCategory = () => {
	const [allRecipes, setAllRecipes] = useState([]);
	const history = useHistory();

	const { type, searchTerm } = useParams();

	useEffect(() => {
		async function fetchData() {
			if (type === "category") {
				const response = await axios.get(
					`https://recipe-board.herokuapp.com/api/recipes/recipecategory/${searchTerm}`
				);
				setAllRecipes(response.data);
			} else {
				const response = await axios.get(
					`https://recipe-board.herokuapp.com/api/recipes/recipearea/${searchTerm}`
				);
				setAllRecipes(response.data);
			}
		}

		fetchData();
		// eslint-disable-next-line
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

							<h2 className="Dish-Desc">{result.category}</h2>
						</div>
					</div>
				))
			) : (
				<h1>LOADING...</h1>
			)}
		</div>
	);
};

export default AreaOrCategory;
