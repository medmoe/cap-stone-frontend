import React from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";

const UserProfile = () => {
	const currentUserInfo = useSelector(
		(state) => state.currentUserReducer.currentUser
	);

	var d = new Date();
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var dataStr = month + "/" + date + "/" + year;

	return (
		<div className="userProfileMainContainer">
			<div className="userProfileInformationContainer">
				<div className="userProfileUser">
					<div className="userProfileImage"></div>
					<div className="userProfileUserNameContainer">
						{/* <h2>{currentUserInfo.first_name}</h2>
						<h2>{currentUserInfo.last_name}</h2> */}
						<h2>Today's date </h2>
						<h3>{dataStr}</h3>
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
