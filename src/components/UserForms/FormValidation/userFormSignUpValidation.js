import axios from "axios";
import { store } from "../../../index";
import { addCurrentUserToStateAction } from "../../../Redux/Actions/currentUser";
import { addCookiesAction } from "../../../Redux/Actions/login";

export const UseFormSignUpValidation = async (formObject) => {
	let error = {};
	//Check if the first name is empty. If it is empty, give the errors object the error String
	if (!formObject.first_name) {
		error.firstname = "Firstname required!";
	} else if (formObject.first_name.length < 2) {
		//Check if the first name is short. If it is short, give the errors object the error String
		error.firstname = "Firstname must be longer than one character";
	}

	//Check if the first name is empty. If it is empty, give the errors object the error String
	if (!formObject.last_name) {
		error.lastname = "Lastname required!";
	} else if (formObject.last_name.length < 2) {
		//Check if the last name is short. If it is short, give the errors object the error String
		error.lastname = "Lastname must be longer than one character";
	}

	//Check if the email is empty. If it is empty, give the errors object the error String
	if (!formObject.email) {
		error.email = "Email required!";
	} else if (!/\S+@\S+\.\S+/.test(formObject.email)) {
		//Check if the email is valid WITH THE "@" If it is not valid, give the errors object the error String
		error.email = "Please provide a valid email";
	} else {
		const x = await axios.get(
			`http://localhost:8080/api/users/${formObject.email}`
		);
		console.log(x);
		if (x.data === "email exist") {
			error.email = "This email is already in used";
		}
	}

	//Check if the password is empty. If it is empty, give the errors object the error String
	if (!formObject.password) {
		error.password = "Please provide a pasword";
	} else if (formObject.password.length < 6) {
		//Check if the password is 6 characters or longer. If it is short, give the errors object the error String
		error.password = "Password need to be longer than 6 characters";
	}

	if (Object.keys(error).length === 0 && error.constructor === Object) {
		console.log(formObject);
		const x = await axios.post(
			"http://localhost:8080/api/users/register",
			formObject
		);

		console.log(x);

		console.log(x.data);
		localStorage.setItem("token", x.data.sessionID);
		localStorage.setItem("email", x.data.user.user.email);
		store.dispatch(addCookiesAction(x.data.loggedIn));
		store.dispatch(addCurrentUserToStateAction(x.data.user));
	} else {
		return error;
	}
};
