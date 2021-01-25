import axios from "axios";
const useFormLoginValidation = (formObject) => {
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

	let isThereAnyError = false; //This variable help us keep track whether or not the errors object is empty

	for (let element in errors) {
		if (errors.hasOwnProperty(element)) {
			//This will loop through the error object to find whether or not it is empty
			isThereAnyError = true;
		}
	}

	if (isThereAnyError) {
		return errors;
	} else {
		//do an axios post call to checkever or not the user is in database
		//get a response back from the database
		/*
            if(the reponse saying the user does not exist)
                errors.usernotfound = "The user does not exist in the database"
            else
                get the reponse of the user data from database and pass it to 
                the currentUser REDUX
        */
	}
};

export default useFormLoginValidation;
