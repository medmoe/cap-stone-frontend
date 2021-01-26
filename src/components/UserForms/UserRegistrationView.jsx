import axios from "axios";
import React, { useState } from "react";
import "./UserRegistrationView.css";
import { UseFormSignUpValidation } from "../FormValidation/userFormSignUpValidation";

const UserRegistrationView = (props) => {
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [errorMessage, setErrorMessage] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		let userInfo = {
			firstname,
			lastname,
			email,
			password,
		};
		let errors = UseFormSignUpValidation(userInfo);
		console.log(errors);

		if (errors == null) {
			props.handleIsLogin();
			console.log("HERE");
		} else {
			setErrorMessage(errors);
		}
	};

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

	const handleSwitch = () => {
		props.handleSwitch();
	};

	return (
		<div className="signUpForm">
			<form onSubmit={handleSubmit}>
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
			<div className="toLoginForm">
				<h2>Already have an account?</h2>
				<button onClick={handleSwitch}>Login</button>
			</div>
		</div>
	);
};
export default UserRegistrationView;
