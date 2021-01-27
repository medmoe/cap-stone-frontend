import axios from "axios";
import React from "react";
import "./UserRegistrationView.css";
import { UseFormSignUpValidation } from "../FormValidation/userFormSignUpValidation";
import FormSignUpHandler from "../FormValidation/FormSignUpHandler";

const UserRegistrationView = (props) => {
	const { handleChange, formInfo, handleSubmit, errors } = FormSignUpHandler(
		UseFormSignUpValidation,
		props.handleIsLogin
	);

	const handleSwitch = () => {
		props.handleSwitch();
	};

	return (
		<div className="signUpForm">
			<form onSubmit={handleSubmit} className="theFormLogin">
				<div className="signUpItems">
					<h1>Sign Up</h1>

					<div className="nameContainer">
						<label for="firstname"> First Name:</label>
						<input
							className="input-box firstname"
							type="text"
							key="firstname"
							name="firstName"
							onChange={handleChange}
							value={formInfo.firstName}
						></input>

						<div>{errors.firstname}</div>

						<label for="lastname"> Last Name:</label>
						<input
							className="input-box lastname"
							type="text"
							key="lastname"
							name="lastName"
							onChange={handleChange}
							value={formInfo.lastName}
						></input>
						<div>{errors.lastname}</div>
					</div>

					<div className="emailContainer">
						<label for="email"> Email:</label>
						<input
							className="input-box email"
							type="text"
							key="email"
							name="email"
							onChange={handleChange}
							value={formInfo.email}
						></input>
						<div>{errors.email}</div>
					</div>

					<div className="passwordContainer">
						<label for="password"> Password:</label>
						<input
							className="input-box password"
							type="password"
							id="password"
							name="password"
							onChange={handleChange}
							value={formInfo.password}
						></input>
						<div>{errors.password}</div>
					</div>

					<button className="loginButton">Sign Up</button>
				</div>
			</form>
			<div className="toLoginForm">
				<h2>Already have an account?</h2>
				<button className="loginFormButton" onClick={handleSwitch}>
					Login
				</button>
			</div>
		</div>
	);
};
export default UserRegistrationView;
