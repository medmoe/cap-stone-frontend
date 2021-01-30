import React, { useState } from "react";
import { useSelector } from "react-redux";
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
	const userInfo = useSelector((state) => state.currentUserReducer.currentUser);

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
			email: userInfo.email,
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
			<div className="RecipeCreator-sub-container">
				<form className="RecipeCreator" onSubmit={handleSubmit}>
					<div className="RecipeCreatorField">
						<label>Recipe Name:</label>
						<input
							type="text"
							name="recipeName"
							onChange={handleChange}
							className="recipecreator-inputbox"
						></input>
						<label>Your description: </label>
						<textarea name="description" onChange={handleChange}></textarea>
						<label>Category:</label>
						<input type="text" name="category" onChange={handleChange}></input>
						<label>Area:</label>
						<input type="text" name="area" onChange={handleChange}></input>
						<label>Your Instruction:</label>
						<textarea name="instructions" onChange={handleChange}></textarea>
						<label>Image:</label>
						<input type="text" name="image" onChange={handleChange}></input>
						<label>Add Ingredient:</label>
						<button
							className="addIngrident"
							type="button"
							name="add"
							onClick={addIngredients}
						>
							+
						</button>
						{count.map((count, index) => {
							return (
								<div key={index}>
									<label className="ingrident">{`Ingredient${
										index + 1
									}: `}</label>
									<input
										name={`Ingredient${index + 1}`}
										onChange={handleChange}
									></input>
									<button
										className="removeIngrident"
										onClick={(index) => removeIngredients(index)}
									>
										-
									</button>
								</div>
							);
						})}

						<button type="submit" className="create">
							Create Recipe
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RecipeCreator;
