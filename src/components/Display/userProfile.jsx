import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";
import FavoriteRecipe from "./favoriteRecipe";

const UserProfile = () => {
	var d = new Date();
	var date = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var dataStr = month + "/" + date + "/" + year;
	const token = localStorage.getItem("token");
	const [user, setUser] = useState([]);
	const [recipe, setRecipe] = useState([]);
	useEffect(async () => {
		const response = await axios.get(
			`http://localhost:8080/api/users/session-id/${token}`
		);
		console.log(response);
		setUser(response.data[0]);
		setRecipe(response.data[0].recipes);
	}, []);

	return (
		<div className="userProfileMainContainer">
			<div className="userProfileInformationContainer">
				<div className="userProfileUser">
					<div className="userProfileImage"></div>
					<div className="userProfileUserNameContainer">
						<h2>{user.first_name}</h2>
						<h2>{user.last_name}</h2>
						<h2>Today's date </h2>
						<h3>{dataStr}</h3>
					</div>
				</div>
				<div className="userProfileData">
					{recipe[2] ? (
						<div>
							<FavoriteRecipe recipe={recipe[0]} />
							<FavoriteRecipe recipe={recipe[1]} />
							<FavoriteRecipe recipe={recipe[2]} />
						</div>
					) : recipe[1] ? (
						<div>
							<FavoriteRecipe recipe={recipe[0]} />
							<FavoriteRecipe recipe={recipe[1]} />
						</div>
					) : recipe[0] ? (
						<div>
							<FavoriteRecipe recipe={recipe[0]} />{" "}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
