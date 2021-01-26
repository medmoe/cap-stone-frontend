import React from "react";
import {
	addCurrentUserToStateAction,
	logOutCurrentUserAction,
	updateCurrentUserAction,
} from "../Redux/Actions/currentUser";
import { useSelector, useDispatch } from "react-redux";

const Test = () => {
	const currentUser = useSelector(
		(state) => state.currentUserReducer.currentUser
	);
	const dispatch = useDispatch();

	const test = () => {
		const user = {
			name: "happy",
			email: "sdasd",
		};
		dispatch(addCurrentUserToStateAction(user));
	};

	const x = () => {
		const user = {
			name: "happy",
			email: "sdasd",
		};

		dispatch(logOutCurrentUserAction(user));
	};

	const y = () => {
		const user = {
			name: "nothappy",
			email: "sadas",
		};
		dispatch(updateCurrentUserAction(user));
	};

	return (
		<div>
			<h1>{currentUser.name}</h1>
			<button onClick={test}>Submit</button>
			<button onClick={x}>Delete</button>
			<button onClick={y}>Update</button>
		</div>
	);
};

export default Test;
