import axios from "axios";
import React, { useState } from "react";
import "./reciepeSearchBar.css";
import {Redirect, Link, useHistory} from "react-router-dom";


const RecipeSearchBar = () => {

const history = useHistory()

const [search, setSearch] = useState("")

const HandleSubmit = (e) => {
		e.preventDefault();

		axios.get(`http://localhost:8080/api/recipes/recipeid/${search}`)
			.then(results =>{
			console.log(results.data.id);
			// console.log(this.state.searchQuery)
			// <Redirect to = "/allrecipes" />
			history.push(`/recipes/recipeid/${results.data.id}`)
			})
			.catch((error) => console.log(error));
			
	}
	
const handleQuery = (e) => {
	setSearch(e.target.value)
}


	return(
		<div className="RecipeSearchBarMainContainer">
			<div className="RecipeSearchBarMiddleContainer">
				<form className="barContainer" onSubmit = {HandleSubmit}>
					<div className="theBar">
						<div className="barHeader">
							<h1>Let's find your desired recipe</h1>
						</div>

						<input
							className="searchBar"
							placeholder="Enter a recipe name"
							type="text"
							onChange = {handleQuery}
							value = {search}
						></input>

						
						<button>Search</button>
						
					</div>
				</form>
			</div>
		</div>
	)
}


export default RecipeSearchBar;
