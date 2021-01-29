import React, { useState } from "react";
import "./recipeCreator.css";

const RecipeCreator = () => {
	const [recipe, setRecipe] = useState({});
	const [count, setCount] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(recipe);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		const x = value;
		console.log(x);
		setRecipe({ ...recipe, [name]: x });
	};

	const addIngredients = () => {
		setCount([...count, ""]);
		console.log(count);
	};

	const removeIngredients = (index) => {
		let tempIngredient = count;
		tempIngredient.splice(index, 1);
		console.log(tempIngredient);
		setCount([...count]);
	};

	return (
		<div className="RecipeCreator-main-container">
			<form className="RecipeCreator" onSubmit={handleSubmit}>
				<div className="RecipeCreatorField">
					<label>Recipe Name</label>
					<input
						type="text"
						name="Recipename"
						value={recipe.Recipename}
						onChange={handleChange}
						className="recipecreator-inputbox"
					></input>
					<label>Your description</label>
					<textarea name="Description" onChange={handleChange}></textarea>
					<label>Your Instruction</label>
					<label>Image</label>
					<input type="text" name="RecipeURL" onChange={handleChange}></input>
					<textarea name="Instruction" onChange={handleChange}></textarea>
					<label>Add Ingredient</label>
					{count.map((count, index) => {
						return (
							<div key={index}>
								<label>{`Ingredient${index + 1}: `}</label>
								<input
									name={`Ingredient${index + 1}`}
									onChange={handleChange}
								></input>
								<button onClick={(index) => removeIngredients(index)}>
									Remove Ingredients
								</button>
							</div>
						);
					})}
					<button onClick={addIngredients}>Add Ingredient</button>
					<button type="submit">Create Recipe</button>
				</div>
			</form>
		</div>
	);
};

export default RecipeCreator;
