import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UseFormLoginValidation } from "../FormValidation/userFormLoginValidation";
import "./UserLoginView.css";

const UserLoginView = (props) => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [errorMessage, setErrorMessage] = useState({});
	const handleSubmit = (e) => {
		e.preventDefault();

		let userInfo = {
			email,
			password,
		};
		let errors = UseFormLoginValidation(userInfo);
		if (errors == null) {
			//login
		} else {
			setErrorMessage(errors);
		}
	};

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

	const handleSwitchToSignUp = () => {
		props.handleSwitch();
	};

	return (
		<div className="LoginForm">
			<form onSubmit={handleSubmit}>
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

			<div className="toSignUpForm">
				<h2>Don't have an account?</h2>
				<button onClick={handleSwitchToSignUp}>Sign Up</button>
			</div>
		</div>
	);
};
export default UserLoginView;
//this gets sent to the index.js file in the views folder
