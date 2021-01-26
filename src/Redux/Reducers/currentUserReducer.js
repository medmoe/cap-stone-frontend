const initialState = {
	currentUser: [],
};

const currentUser = (state = initialState, action) => {
	switch (action.payload) {
		case "ADD_CURRENTUSER":
			return {
				...state,
				currentUser: state.currentUser.concat(action.payload),
			};
		case "LOGOUT_CURRENTUSER":
			return state;
		case "DELETE_CURRENTUSER":
			return state;
		case "UPDATE_CURRENTUSER":
			return state;
		default:
			return state;
	}
};

export default currentUser;
