import React, { Component } from 'react';
import './RecipeDisplay.css';
import {fetchSingleRecipe} from '../../Redux/Reducers/SingleRecipe';
import {connect} from 'react-redux';

class RecipeDisplay extends Component {
    

    componentDidMount(){
        this.props.fetchSingleRecipe(this.props.match.params.id);
        // console.log(this.props.match.params)
    }

    addToFavorites = (event) => {
        console.log("The recipe:", this.props.singleRecipe.name)
        console.log("The recipe id:", this.props.singleRecipe.id)
        // this.props.addToFavorites(event.target.value)

    }

    render(){
        console.log("SingleRecipeView props:", this.props.match.params);
        // {this.props.singleRecipe.name}
    return(
        <div className = "RecipeMainContainer">
            <button onClick = {this.addToFavorites} value = {this.props.singleRecipe.id}>Add To Favorites</button>
            <div className = "RecipeMain">
                <img
                    className = "RecipeDisplayImage"
                    src = {this.props.singleRecipe.image}
                    alt = "Some Good Food"
                />
                <h1 className = "RecipeNameText">{this.props.singleRecipe.name}</h1>
                <h1 className = "RecipeDescriptionText">
                    {this.props.singleRecipe.instructions}
                </h1> 

                <div className = "row">
                <div className = "column side">
                    <h2>More Info</h2>
                    A list of very long ingredients goes here!
                    dcmlpkcmnp
                    mcmqdmcknvj
                    cbqihvivio
                    qfkvofq
                </div>

                <div className = "column middle">
                    <h1>More Info</h1>
                    
                    It is a long established fact that a reader
                    will be distracted by the readable content 
                    of a page when looking at its layout. The 
                    point of using Lorem Ipsum is that it has 
                    a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here',
                </div>

                <div className = "column side">
                    <h2>Ingredients</h2>
                    A list of very long ingredients goes here!
                    dcmlpkcmnp
                    mcmqdmcknvj
                    cbqihvivio
                    qfkvofq
                </div>
            </div>

            </div>

            
        </div>

    )
    }
}

const mapStateToProps = state => {
    return{
        singleRecipe: state.singleRecipeReducer.singleRecipe
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchSingleRecipe: (id) => dispatch(fetchSingleRecipe(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDisplay);