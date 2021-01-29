import React from "react";
import "./UserRegistrationView.css";
//import Form Validation and FormHandler
import { UseFormSignUpValidation } from "../UserForms/FormValidation/userFormSignUpValidation";
import FormSignUpHandler from "../UserForms/FormValidation/FormSignUpHandler";

const UserRegistrationView = (props) => {
	//This function let us handle form validation, submit the form, send out errors
	const { handleChange, formInfo, handleSubmit, errors } = FormSignUpHandler(
		UseFormSignUpValidation
	);

	//This function help user switch between the signup page and the loginpage on the main home screen
	const handleSwitch = () => {
		props.handleSwitch();
	};

	return (
		<div className="sign-form-main-container">
			<form onSubmit={handleSubmit} className="signup-form">
				<div className="signup-form-header">
					<h1>Sign Up</h1>
				</div>

				<label className="signup-form-firstname-label" for="firstname">
					First Name:
				</label>
				<input
					className="input-box firstname"
					type="text"
					key="firstname"
					name="firstName"
					onChange={handleChange}
					value={formInfo.firstName}
				></input>
				<div className="error">{errors.firstname}</div>

				<label for="lastname"> Last Name:</label>
				<input
					className="input-box lastname"
					type="text"
					key="lastname"
					name="lastName"
					onChange={handleChange}
					value={formInfo.lastName}
				></input>
				<div className="error">{errors.lastname}</div>

				<label for="email"> Email:</label>
				<input
					className="input-box email"
					type="text"
					key="email"
					name="email"
					onChange={handleChange}
					value={formInfo.email}
				></input>
				<div className="error">{errors.email}</div>

				<label for="password"> Password:</label>
				<input
					className="input-box password"
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					value={formInfo.password}
				></input>
				<div className="error">{errors.password}</div>

				<button className="sign-button">sign up</button>
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
