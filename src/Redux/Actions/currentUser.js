import axios from "axios";

export const addCurrentUserToStateAction = (payload) => {
	return {
		type: "ADD_CURRENTUSER",
		payload,
	};
};

export const updateCurrentUserAction = (payload) => {
	return {
		type: "UPDATE_CURRENTUSER",
		payload,
	};
};

export const logOutCurrentUserAction = (payload) => {
	return {
		type: "LOGOUT_CURRENTUSER",
		payload,
	};
};

export const deleteCurrentUserAction = (payload) => {
	return {
		type: "DELTE_CURRENTUSER",
		payload,
	};
};

//This the thunk to get the user that login valid from the database
export const getTheUserFromDateBase = () => {
	return async (dispatch) => {
		try {
			const reponse = await axios.get("");
			dispatch(addCurrentUserToStateAction(reponse.data));
		} catch (error) {
			console.error(error);
		}
	};
};
