import React, { useState } from "react";
import "./UserLoginView.css";

const UserLoginView = () => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [errorMessage, setErrorMessage] = useState({});

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	let userLogin = {
	// 		email,
	// 		password,
	// 	};

	// 	const isValid = UseFormLoginValidation(userLogin);

	// 	let isThereAnyError = false; //This variable help us keep track whether or not the errors object is empty

	// 	for (let element in isValid) {
	// 		if (isValid.hasOwnProperty(element)) {
	// 			//This will loop through the error object to find whether or not it is empty
	// 			isThereAnyError = true;
	// 		}
	// 	}

	// 	if (isThereAnyError) {
	// 		setErrorMessage(isValid);
	// 	} else {
	// 		setemail("");
	// 		setpassword("");
	// 		setErrorMessage({});
	// 		console.log("it works");
	// 		//do an axios post call to checkever or not the user is in database
	// 		//get a response back from the database
	// 		/*
	//             if(the reponse saying the user does not exist)
	//                 errors.usernotfound = "The user does not exist in the database"
	//             else
	//                 get the reponse of the user data from database and pass it to
	//                 the currentUser REDUX
	//                 dispatch(getTheUserFromDateBase(reponse));
	//                 send  use to user profile
	//         */
	// 	}
	// };

	const handleChange = (e) => {
		let { name } = e.target;
		let { value } = e.target;

		switch (name) {
			case "email":
				setemail(value);
				break;
			case "password":
				setpassword(value);
				break;
			default:
				break;
		}
	};

	return (
		<div className="LoginPageMainContainer">
			<div className="LoginPageSubContainer">
				<div className="LoginInFormImage"></div>
				<form className="LoginForm">
					<div className="loginFormItems">
						<h1>Login In</h1>
						<div className="emailContainer">
							<label for="email"> Email:</label>
							<input
								type="text"
								key="email"
								name="email"
								onChange={handleChange}
								value={email}
							></input>
							<div>{errorMessage.email}</div>
						</div>

						<div className="passwordContainer">
							<label for="password"> Password:</label>
							<input
								type="password"
								id="password"
								name="password"
								onChange={handleChange}
								value={password}
							></input>
							<div>{errorMessage.password}</div>
						</div>

						<button>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default UserLoginView;
//this gets sent to the index.js file in the views folder
