import axios from "axios";
import React, { useState } from "react";
import "./UserRegistrationView.css";
// import {useFormLoginValidation} from '../../FormValidation';

const UserRegistrationView = () => {
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [errorMessage, setErrorMessage] = useState({});

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	let userInfo = {
	// 		firstname,
	// 		lastname,
	// 		email,
	// 		password,
	// 	};

	// 	const isValid = UseFormRegistrationValidation(userInfo);

	// 	var isThereAnyError = false;

	// 	for (let element in isValid) {
	// 		if (isValid.hasOwnProperty(element)) {
	// 			//This will loop through the error object to find whether or not it is empty
	// 			isThereAnyError = true;
	// 		}
	// 	}

	// 	if (isThereAnyError == false) {
	// 		setfirstname("");
	// 		setlastname("");
	// 		setemail("");
	// 		setpassword("");
	// 		console.log("sucess");
	// 		setErrorMessage({});

	// 		// axios
	// 		//     .post(..., userInfo)
	// 		//
	// 	} else {
	// 		setErrorMessage(isValid);
	// 	}
	// };

	const handleChange = (e) => {
		let { name } = e.target;
		let { value } = e.target;

		switch (name) {
			case "firstname":
				setfirstname(value);
				break;
			case "lastname":
				setlastname(value);
				break;
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
		<div className="UserRegistrationViewMainContainer">
			<div className="UserRegistrationViewSubContainer">
				<div className="signUpImage"></div>
				<form className="signUpForm">
					<div className="signUpItems">
						<h1>Sign Up</h1>

						<div className="nameContainer">
							<label for="firstname"> First Name:</label>
							<input
								type="text"
								key="firstname"
								name="firstname"
								onChange={handleChange}
								value={firstname}
							></input>
							<div>{errorMessage.firstname}</div>

							<label for="lastname"> Last Name:</label>
							<input
								type="text"
								key="lastname"
								name="lastname"
								onChange={handleChange}
								value={lastname}
							></input>
							<div>{errorMessage.lastname}</div>
						</div>

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
export default UserRegistrationView;

//this gets sent to the index.js file in the views folder
