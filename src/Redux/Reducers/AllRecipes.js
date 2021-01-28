import axios from 'axios';

export const initialState = {
    recipes: []
};

//ACTION TYPES
const FETCH_ALL_RECIPES = "FETCH_ALL_RECIPES";


//ACTION CREATORS
const getAllRecipes = (data) =>  {
    return{
        type: FETCH_ALL_RECIPES,
        data
    }
}

//THUNK
export const fetchAllRecipes = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:8080/api/recipes/')
            console.log(response)
            dispatch(getAllRecipes(response.data.recipes));
        } catch (error) {
            console.error(error);
        }
    }
}

//REDUCER
const allRecipesReducer = (state = initialState, action) => {


    switch(action.type) {
        case FETCH_ALL_RECIPES:  
        return{
                ...state,
                recipes: action.data
            }
        default:
            return state;
    }
}



export default allRecipesReducer;


