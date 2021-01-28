import axios from 'axios';

export const startState = {
    singleRecipe: []
}

//ACTION TYPE
const FETCH_SINGLE_RECIPE = "FETCH_SINGLE_RECIPE";

//ACTION CREATOR
const getSingleRecipe = (data) => {
    return{
        type: FETCH_SINGLE_RECIPE,
        data
    }
}

//THUNK
export const fetchSingleRecipe = (recipeName) => {
    return async (dispatch) => {
        try {
            const response = axios.get(`http://localhost:8080/api/recipes/pizza`)
            console.log(response)
            dispatch(getSingleRecipe(response.data.singleRecipe));
        } catch (error) {
            console.error(error);
        }
    }
}

//REDUCER 
const singleRecipeReducer = (state = startState, action) =>{

    switch(action.type) {
        case FETCH_SINGLE_RECIPE:
            return {
                ...state,
                singleRecipe: action.data
            }
    }
}

export default singleRecipeReducer;