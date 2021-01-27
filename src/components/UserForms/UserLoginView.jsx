import React from "react";
import { UseFormLoginValidation } from "../FormValidation/userFormLoginValidation";
import "./UserLoginView.css";
import FormSignInHandler from "../FormValidation/FormSignInHandler";

const UserLoginView = (props) => {
	const { handleChange, formInfo, handleSubmit, errors } = FormSignInHandler(
		UseFormLoginValidation,
		props.handleIsLogin
	);

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
							value={formInfo.email}
						></input>
						<div>{errors.email}</div>
					</div>

					<div className="passwordContainer">
						<label for="password"> Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={handleChange}
							value={formInfo.password}
						></input>
						<div>{errors.password}</div>
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
