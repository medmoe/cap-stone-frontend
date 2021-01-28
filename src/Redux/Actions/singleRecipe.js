import axios from 'axios';

//ACTION TYPE
const FETCH_SINGLE_RECIPE = "FETCH_SINGLE_RECIPE"


//ACTION CREATOR
const fetchSingleRecipe = recipe => {
    return{
        type: FETCH_SINGLE_RECIPE,
        payload: recipe
    }
}

//THUNK
export const fetchSingleRecipeThunk = (name) => dispatch => {
    return axios
        .get(`http://localhost:8080/api/recipes/${name}`)
        .then(results => results.data)
        .then(recipe => dispatch(fetchSingleRecipe(recipe[0])))
        .catch(error => console.error(error))
}

//REMEMBER TO EXPORT DEFAULT