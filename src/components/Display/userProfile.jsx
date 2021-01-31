import axios from "axios";
import React, { useEffect, useState } from "react";
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
	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(
				`https://recipe-board.herokuapp.com/api/users/session-id/${token}`
			);
			console.log(response);
			setUser(response.data[0]);
			setRecipe(response.data[0].recipes);
		}

		fetchData();
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
						<div className="Allthree">
							<div className="one">
								<FavoriteRecipe recipe={recipe[0]} />
							</div>
							<div className="two">
								<FavoriteRecipe recipe={recipe[1]} />
							</div>
							<div className="three">
								<FavoriteRecipe recipe={recipe[2]} />
							</div>
						</div>
					) : recipe[1] ? (
						<div className="Alltwo">
							<div className="one">
								<FavoriteRecipe recipe={recipe[0]} />
							</div>
							<div className="two">
								<FavoriteRecipe recipe={recipe[1]} />
							</div>
						</div>
					) : recipe[0] ? (
						<div className="AllOne">
							<div className="one">
								<FavoriteRecipe recipe={recipe[0]} />
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
