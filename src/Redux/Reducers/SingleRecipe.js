import axios from "axios";

export const startState = {
	singleRecipe: [],
};

//ACTION TYPE
const FETCH_SINGLE_RECIPE = "FETCH_SINGLE_RECIPE";

//ACTION CREATOR
const getSingleRecipe = (data) => {
	return {
		type: FETCH_SINGLE_RECIPE,
		data,
	};
};

//THUNK
export const fetchSingleRecipe = (id) => {
	console.log(id);
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`https://recipe-board.herokuapp.com/api/recipes/recipeid/${id}`
			);
			console.log(response);
			dispatch(getSingleRecipe(response.data));
		} catch (error) {
			console.error(error);
		}
	};
};

//REDUCER
const singleRecipeReducer = (state = startState, action) => {
	switch (action.type) {
		case FETCH_SINGLE_RECIPE:
			return {
				...state,
				singleRecipe: action.data,
			};
		default:
			return state;
	}
};

export default singleRecipeReducer;
