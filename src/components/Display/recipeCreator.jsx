import React, { useState } from "react";
import "./recipeCreator.css";
import axios from "axios";

const RecipeCreator = () => {
	const [recipe, setRecipe] = useState({});
	const [recipeName, setRecipeName] = useState("");
	const [category, setCategory] = useState("");
	const [area, setArea] = useState("");
	const [image, setImage] = useState("");
	const [instructions, setInstructions] = useState("");
	const [description, setDescription] = useState("");
	const [all_ingredients, setIngredients] = useState({});

	const [count, setCount] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		console.log(recipe);

		const response = await axios.post(
			`http://localhost:8080/api/recipes/add/${recipeName}`,
			recipe
		);
		console.log(response);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === "recipeName") {
			console.log(value);
			setRecipeName(value);
			console.log(recipeName);
		} else if (name === "category") {
			setCategory(value);
		} else if (name === "area") {
			setArea(value);
		} else if (name === "instructions") {
			setInstructions(value);
		} else if (name === "image") {
			setImage(value);
		} else if (name === "description") {
			setDescription(value);
		} else {
			setIngredients({ ...all_ingredients, [name]: value });
		}

		setRecipe({
			recipeName,
			category,
			area,
			all_ingredients,
			instructions,
			image,
			description,
		});
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
						name="recipeName"
						onChange={handleChange}
						className="recipecreator-inputbox"
					></input>
					<label>Your description</label>
					<textarea name="description" onChange={handleChange}></textarea>
					<label>Category</label>
					<input type="text" name="category" onChange={handleChange}></input>
					<label>Area</label>
					<input type="text" name="area" onChange={handleChange}></input>
					<label>Your Instruction</label>
					<label>Image</label>
					<input type="text" name="image" onChange={handleChange}></input>
					<textarea name="instructions" onChange={handleChange}></textarea>
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

					<button type="submit">Create Recipe</button>
				</div>
			</form>
			<button onClick={addIngredients}>Add Ingredient</button>
		</div>
	);
};

export default RecipeCreator;
