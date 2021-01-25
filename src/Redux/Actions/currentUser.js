import axios from "axios";

export const addCurrentUserToStateAction = (payload) => {
	return {
		type: "ADD_CURRENTUSER",
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
