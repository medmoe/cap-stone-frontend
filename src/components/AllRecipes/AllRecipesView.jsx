import React, { Component } from 'react';
import './AllRecipes.css'

class AllRecipesView extends Component{



    render(){
        return(
            <div className = "RecipeContainer">
            <div className = "DishNameContainer">
                <h2 className = "Dish-Name">{this.props.recipeName}</h2>
                </div>

                <div className = "DishDescContainer">
                <h2 className = "Dish-Desc">{this.props.recipeDescription}</h2>
                </div>

                <div className = "ImageContainer"> 
                    <img
                        className = "food-image"
                        alt = "Food"
                    />
                </div>
                
            </div>
        )
    }
}

export default AllRecipesView;