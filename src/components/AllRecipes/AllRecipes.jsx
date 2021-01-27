import React from 'react';
import './AllRecipes.css'

const AllRecipes = () => {

    return(
        <div className = "AllRecipesContainer">
            {/* essentially, we would pass in props here, in order to map all of the recipes */}
            <h1 className = "RecipeMainText">Our Recipes</h1>
            <div className = "RecipeContainer">
            <div className = "DishNameContainer">
                <h2 className = "Dish-Name">Name of food</h2>
                </div>

                <div className = "DishDescContainer">
                <h2 className = "Dish-Desc">Description</h2>
                </div>

                <div className = "ImageContainer"> 
                    <img
                        className = "food-image"
                        alt = "Food"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default AllRecipes;