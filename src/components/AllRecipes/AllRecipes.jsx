import axios from 'axios';
import React, { Component } from 'react';
import AllRecipesView from './AllRecipesView'


class AllRecipes extends Component {
    constructor(props) {
        super(props);
        //initializing state, data will go in recipes array
        this.state = {
            recipes: []
        };
        this.SearchAllRecipes = this.SearchAllRecipes.bind(this);
    }
    //gets recipes from local database
    SearchAllRecipes(){
        axios.get('http://localhost:8080/api/recipes')
            .then((results) => {
                console.log(results.data.recipes)
                this.setState({
                    recipes: results.data.recipes
                });
            })
            .catch((error) => console.log(error))
    }
    //this enables user to click on all recipes tab, and theyre all loaded up when the page opens
    componentDidMount(){
        this.SearchAllRecipes();
    }

    render(){
        return(
            <div>
                <div className = "AllRecipesContainer">
                <h1 className = "RecipeMainText">Our Recipes</h1>
                {this.state.recipes.map((dish, index) => {
                    return(
                        <AllRecipesView 
                            key = {index}
                            recipeName = {dish.name}
                            recipeDescription = {dish.description}
                            recipeID = {dish.id}

                        />
                    )
                })}
                </div>
            </div>
            

        )
    }
}

export default AllRecipes;