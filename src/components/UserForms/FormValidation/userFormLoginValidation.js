import axios from "axios";
import { store } from "../../../index";
import { addCurrentUserToStateAction } from "../../../Redux/Actions/currentUser";
import { addCookiesAction } from "../../../Redux/Actions/login";

export const UseFormLoginValidation = async (formObject) => {
	let errors = {};

	//Check if the email is empty. If it is empty, give the errors object the error String
	if (!formObject.email) {
		errors.email = "Email required!";
	} else if (!/\S+@\S+\.\S+/.test(formObject.email)) {
		//Check if the email is valid WITH THE "@" If it is not valid, give the errors object the error String
		errors.email = "Please provide a valid email";
	}

	//Check if the password is empty. If it is empty, give the errors object the error String
	if (!formObject.password) {
		errors.password = "Please provide a pasword";
	} else if (formObject.password.length < 6) {
		//Check if the password is 6 characters or longer. If it is short, give the errors object the error String
		errors.password = "Password need to be longer than 6 characters";
	}

	axios.defaults.withCredentials = true;
	if (Object.keys(errors).length === 0 && errors.constructor === Object) {
		const x = await axios.post(
			"http://localhost:8080/api/users/login",
			formObject
		);

		console.log("mounting set items");
		console.log(x.data);
		localStorage.setItem("token", x.data.sessionID);

		store.dispatch(addCookiesAction(x.data.loggedIn));
		store.dispatch(addCurrentUserToStateAction(x.data.user));
	} else {
		return errors;
	}
};
