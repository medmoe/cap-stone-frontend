const useFormLoginValidation = (formObject) => {
	let errors = {};

	//Check if the first name is empty. If it is empty, give the errors object the error String
	if (!formObject.firstname.trim()) {
		 errors.firstname= "Firstname required!";
	} else if (formObject.firstname.length < 2) {
		//Check if the first name is short. If it is short, give the errors object the error String
		errors.firstname = "Firstname must be longer than one character";
	}

	//Check if the first name is empty. If it is empty, give the errors object the error String
	if (!formObject.lastname.trim()) {
		errors.lastname = "Lastname required!";
	} else if (formObject.lastname.length < 2) {
		//Check if the last name is short. If it is short, give the errors object the error String
		errors.firstname = "Lastname must be longer than one character";
	}

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

	return errors;
};

export default useFormLoginValidation;
