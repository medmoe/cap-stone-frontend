const initialState = {
	currentUser: {},
};

const currentUserDucer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CURRENTUSER":
			return { ...state, currentUser: action.payload };
		case "LOGOUT_CURRENTUSER":
			return { ...state, currentUser: [] };
		case "DELETE_CURRENTUSER":
			return { ...state, currentUser: [] };
		case "UPDATE_CURRENTUSER":
			return { ...state, currentUser: action.payload };

		default:
			return state;
	}
};

export default currentUserDucer;
