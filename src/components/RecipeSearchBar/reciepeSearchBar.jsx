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


		this.UpdateQuery = this.UpdateQuery.bind(this);
		this.HandleSubmit = this.HandleSubmit.bind(this);
	}
		UpdateQuery(e){
			this.setState({searchQuery: e.target.value});
		}
		
		HandleSubmit(e){
			e.preventDefault();

			axios.get(`http://localhost:8080/api/recipes/${this.state.searchQuery}`)
				.then(results =>{
				console.log(results.data);
				console.log(this.state.searchQuery)
				})
				.catch((error) => console.log(error));
			
		}
	
	
	
	render(){
		console.log(this.state.searchQuery)
	return (
		<div className="RecipeSearchBarMainContainer">
			<div className="RecipeSearchBarMiddleContainer">
				<form className="barContainer" onSubmit = {this.HandleSubmit}>
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
						<button>Search</button>
					</div>
				</form>
			</div>
		</div>
	);
	}
};

export default RecipeSearchBar;
