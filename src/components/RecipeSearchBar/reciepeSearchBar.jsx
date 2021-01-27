import axios from "axios";
import React, { Component } from "react";
import "./reciepeSearchBar.css";




class RecipeSearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchQuery: '',
			recipes: []
		}

		this.SearchRecipes = this.SearchRecipes.bind(this);
		this.UpdateQuery = this.UpdateQuery.bind(this);
	}
		UpdateQuery(e){
			this.setState({searchQuery: e.target.value});
		}
		
		SearchRecipes(){
			axios.get('', {
				params:{

				}
			})
			.then((results) =>{
				console.log(results);
				console.log(this.state.searchQuery)
			})
			.catch((error) => console.log(error));
		}
	
	
	
	render(){
	return (
		<div className="RecipeSearchBarMainContainer">
			<div className="RecipeSearchBarMiddleContainer">
				<form className="barContainer">
					<div className="theBar">
						<div className="barHeader">
							<h1>Let's find your desired recipe</h1>
						</div>

						<input
							className="searchBar"
							placeholder="Enter a recipe name"
							type="text"
							onChange = {this.UpdateQuery}
							value = {this.state.searchQuery}
						></input>
					</div>
				</form>
			</div>
		</div>
	);
	}
};

export default RecipeSearchBar;
