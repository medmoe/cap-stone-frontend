const initialState = {
	allRecipe: [],
};

const allRecipeReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_RECIPES":
			return { ...state, allRecipe: action.payload };

		default:
			return state;
	}
};

export default allRecipeReducer;
