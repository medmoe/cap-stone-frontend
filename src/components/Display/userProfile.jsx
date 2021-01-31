import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";
import FavoriteRecipe from "./favoriteRecipe";

const UserProfile = () => {
	const currentUserInfo = useSelector(
		(state) => state.currentUserReducer.currentUser
	);
	console.log("sadsadsadsadsa", currentUserInfo.recipes);
	var d = new Date();
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var dataStr = month + "/" + date + "/" + year;

	return (
		<div className="userProfileMainContainer">
			{currentUserInfo.user ? (
				<div className="userProfileInformationContainer">
					<div className="userProfileUser">
						<div className="userProfileImage"></div>
						<div className="userProfileUserNameContainer">
							<h2>{currentUserInfo.user.first_name}</h2>
							<h2>{currentUserInfo.user.last_name}</h2>
							<h2>Today's date </h2>
							<h3>{dataStr}</h3>
						</div>
					</div>
					<div className="userProfileData">
						{currentUserInfo.recipes[2] ? (
							<div>
								<FavoriteRecipe recipe={currentUserInfo.recipes[0]} />
								<FavoriteRecipe recipe={currentUserInfo.recipes[1]} />
								<FavoriteRecipe recipe={currentUserInfo.recipes[2]} />
							</div>
						) : currentUserInfo.recipes[1] ? (
							<div>
								<FavoriteRecipe recipe={currentUserInfo.recipes[0]} />
								<FavoriteRecipe recipe={currentUserInfo.recipes[1]} />
							</div>
						) : currentUserInfo.recipes[0] ? (
							<div>
								<FavoriteRecipe recipe={currentUserInfo.recipes[0]} />{" "}
							</div>
						) : null}
					</div>
				</div>
			) : (
				<div> loading </div>
			)}
		</div>
	);
};

export default UserProfile;
