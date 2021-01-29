const initialState = {
	isLogin: "",
};

const isLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_COOKIES":
			return { ...state, isLogin: action.payload };
		case "REMOVE_COOKIES":
			return { ...state, isLogin: action.payload };
		default:
			return state;
	}
};

export default isLoginReducer;
