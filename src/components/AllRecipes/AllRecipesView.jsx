import React, { Component } from 'react';
import './AllRecipes.css'
import {fetchAllRecipes} from '../../Redux/Reducers/AllRecipes';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios';

class AllRecipesView extends Component {
    


    componentDidMount(){
        this.props.fetchAllRecipes();
    } 



    nameFunction = (result) => {
        <Redirect to = {`/recipe/${result}`} />
    } 


    render(){
        console.log("AllRecipesView Props:", this.props);
        return(
            <div className = "AllRecipesContainer">
                {this.props.recipes ? this.props.recipes.map((result, index) => (
                    <div className = "container" key = {index}>
                        
                            <img
                                className = "container__image"
                                src = {result.image}
                                alt = "Food"
                            />

                        <div className = "container__text">
                            <Link to = {`/recipes/recipeid/${result.id}`}>
                                <h2 className = "Dish-Name"> {result.name}</h2>
                            </Link>
                            <h2 className = "Dish-Desc">{result.category}</h2>
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