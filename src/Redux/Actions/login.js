import axios from "axios";

export const addCookiesAction = (payload) => {
	return {
		type: "ADD_COOKIES",
		payload,
	};
};

export const remoteCookiesAction = (payload) => {
	return {
		type: "REMOVE_COOKIES",
		payload,
	};
};
