const initialState = {
	isLogin: "",
};

const isLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_COOKIES":
			return state;
		case "REMOVE_COOKIES":
			return state;
		default:
			return state;
	}
};

export default isLoginReducer;
