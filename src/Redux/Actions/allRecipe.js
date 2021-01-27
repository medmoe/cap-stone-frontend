import axios from "axios";

export const getAllRecipeFromDatabaseAction = (payload) => {
	return {
		type: "GET_RECIPES",
		payload,
	};
};

export const updateARecipeAction = (payload) => {
	return {
		type: "UPATE_RECIPES",
		payload,
	};
};

export const deleteARecipeAction = (payload) => {
	return {
		type: "DELETE_RECIPES",
		payload,
	};
};
