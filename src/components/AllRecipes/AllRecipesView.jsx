import React, { Component } from 'react';
import './AllRecipes.css'
import {fetchAllRecipes} from '../../Redux/Reducers/AllRecipes';
import {connect} from 'react-redux';

class AllRecipesView extends Component {
    
    componentDidMount(){
        this.props.fetchAllRecipes();
    } 



    render(){
        console.log("AllRecipesView Props:", this.props);
        return(
            <div>
                {this.props.recipes ? this.props.recipes.map((result, index) => (
                    <div className = "RecipeContainer" key = {index}>
                    <div>
                        <div className = "DishNameContainer">
                            <h2 className = "Dish-Name" >{result.name}</h2>
                        </div>

                        <div className = "DishDescContainer">
                            <h2 className = "Dish-Desc">{result.description}</h2>
                        </div>

                        <div className = "ImageContainer"> 
                            <img
                                className = "food-image"
                                alt = "Food"
                            />
                        </div>
                    </div>
                    </div>
                )):<h1>LOADING...</h1>}
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log("mapstatetoprops:", state)
    return{
        recipes: state.allRecipesReducer.recipes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchAllRecipes: () => dispatch(fetchAllRecipes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllRecipesView);