import React, { Component } from 'react';
import './AllRecipes.css'
import {Link, Redirect} from 'react-router-dom'

class AllRecipesView extends Component{

    // redirectToID (recipeName,recipeID, recipeDescription){
    //     <Redirect to = {{
    //         pathname: `/recipe/${recipeID}`,
    //         state: {
    //             recipeName,
    //             recipeID,
    //             recipeDescription,
    //         }
    //     }}>

    // }

    render(){
        return(
            // onClick = {() =>  this.redirectToID (this.props.recipeName, this.props.recipeID,
            //     this.props.recipeDescription)}
            <div className = "RecipeContainer">
            <div className = "DishNameContainer">
                <h2 className = "Dish-Name" >{this.props.recipeName}</h2>
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