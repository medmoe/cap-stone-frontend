import axios from "axios";

export const initialState = {
	recipes: [],
};

//ACTION TYPES
const FETCH_ALL_RECIPES = "FETCH_ALL_RECIPES";

//ACTION CREATORS
const getAllRecipes = (data) => {
	return {
		type: FETCH_ALL_RECIPES,
		payload: data,
	};
};

//THUNK
export const fetchAllRecipes = () => {
	return async (dispatch) => {
		try {
			const posting = await axios.post(
				"https://recipe-board.herokuapp.com/api/recipes/"
			);
			const response = await axios.get(
				"https://recipe-board.herokuapp.com/api/recipes/"
			);
			console.log(response);
			// console.log(posting);
			dispatch(getAllRecipes(response.data.allRecipes));
		} catch (error) {
			console.error(error);
		}
	};
};

//REDUCER
const allRecipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_RECIPES:
			return {
				...state,
				recipes: action.payload,
			};
		default:
			return state;
	}
};

export default allRecipesReducer;
