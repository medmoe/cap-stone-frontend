import React, { useState } from "react";
import UserLoginView from "./UserLoginView";
import UserRegistrationView from "./UserRegistrationView";
import "./userMainFormContainer.css";

const UserMainFormContainer = (props) => {
	const [signUpForm, setSignUpForm] = useState(true);

	const handleSwitchToSignUp = () => {
		setSignUpForm(true);
	};

	const handleSwitchToLogin = () => {
		setSignUpForm(false);
	};

	return (
		<div className="UserFormMainContainer">
			<div className="UserFormSubContainer">
				<div className="formImage"></div>
				<div className="form">
					{signUpForm ? (
						<UserRegistrationView
							handleSwitch={handleSwitchToLogin}
							handleIsLogin={props.handleIsLogin}
						/>
					) : (
						<UserLoginView
							handleSwitch={handleSwitchToSignUp}
							handleIsLogin={props.handleIsLogin}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserMainFormContainer;
