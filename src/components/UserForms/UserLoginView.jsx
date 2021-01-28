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
		<div className="LoginForm">
			<form className="theForm" onSubmit={handleSubmit}>
				<div className="loginFormItems">
					<h1>Login In</h1>
					<div className="emailContainer">
						<label for="email"> Email:</label>
						<input
							className="emailinput loginEmailInput"
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
							className="passwordinput loginPasswordInput"
							type="password"
							id="password"
							name="password"
							onChange={handleChange}
							value={formInfo.password}
						></input>
						<div>{errors.password}</div>
					</div>
					<div className="buttonContainer">
						<button className="loginButton">Login</button>
					</div>
				</div>
			</form>

			<div className="toSignUpForm">
				<h2>Don't have an account?</h2>
				<button className="toSignUpForms" onClick={handleSwitchToSignUp}>
					Sign Up
				</button>
			</div>
		</div>
	);
};
export default UserLoginView;
//this gets sent to the index.js file in the views folder
