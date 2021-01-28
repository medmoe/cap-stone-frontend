import React from "react";
import "./UserLoginView.css";
//import Form Validation and FormHandler
import FormSignInHandler from "../UserForms/FormValidation/FormSignInHandler";
import { UseFormLoginValidation } from "../UserForms/FormValidation/userFormLoginValidation";

const UserLoginView = (props) => {
	const { handleChange, formInfo, handleSubmit, errors } = FormSignInHandler(
		UseFormLoginValidation
	);

	const handleSwitchToSignUp = () => {
		props.handleSwitch();
	};

	return (
		<div className="login-form-main-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<h1>Login In</h1>

				<label for="email"> Email:</label>
				<input
					className="input-box"
					type="text"
					key="email"
					name="email"
					onChange={handleChange}
					value={formInfo.email}
				></input>
				<div className="error">{errors.email}</div>

				<label for="password"> Password:</label>
				<input
					className="input-box"
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					value={formInfo.password}
				></input>
				<div className="error">{errors.password}</div>

				<button className="login-button">Login</button>
			</form>

			<div className="toSignUpForm">
				<h2>Don't have an account?</h2>
				<button className="SignFormButton" onClick={handleSwitchToSignUp}>
					Sign Up
				</button>
			</div>
		</div>
	);
};
export default UserLoginView;
//this gets sent to the index.js file in the views folder
