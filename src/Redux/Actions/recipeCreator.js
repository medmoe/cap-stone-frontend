import axios from "axio";

export const createRecipeAction = (payload) => {
	return {
		type: "CREATE_RECIPE",
		payload,
	};
};

export const sendNewRecipeToDatabase = () => {
	return async (dispatch) => {
		try {
		} catch (error) {
			console.error(error);
		}
	};
};
