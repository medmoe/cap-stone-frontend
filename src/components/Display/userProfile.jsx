import React from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";

const UserProfile = () => {
	const currentUserInfo = useSelector(
		(state) => state.currentUserReducer.currentUser
	);

	return (
		<div className="userProfileMainContainer">
			<div className="userProfileInformationContainer">
				<div className="userProfileUser">
					<div class="userProfileImage"></div>
					<div className="userProfileUserNameContainer">
						<h2>First Name</h2>
						<h2>Last Name</h2>
					</div>
				</div>
				<div className="userProfileData">
					<div className="items">sada</div>
					<div className="items">sadsa</div>
					<div className="items">asdasd</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
