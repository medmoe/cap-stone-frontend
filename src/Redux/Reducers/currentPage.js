const initialState = {
	currentPage: "",
};

const currentPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SINGLE_RECIPE_DISPLAY_CLICKED":
			return { ...state, currentPage: action.payload };

		default:
			return state;
	}
};

export default currentPageReducer;
