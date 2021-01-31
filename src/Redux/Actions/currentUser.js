export const addCurrentUserToStateAction = (payload) => {
	return {
		type: "ADD_CURRENTUSER",
		payload,
	};
};

export const updateCurrentUserAction = (payload) => {
	return {
		type: "UPDATE_CURRENTUSER",
		payload,
	};
};

export const logOutCurrentUserAction = (payload) => {
	return {
		type: "LOGOUT_CURRENTUSER",
		payload,
	};
};

export const deleteCurrentUserAction = (payload) => {
	return {
		type: "DELTE_CURRENTUSER",
		payload,
	};
};
/* 
	This thunk is to update the user information and send it back to
	the database

	export const updateTheUserInfoToDatabase = () => {
		return async (dispatch) => {
			try
			{
				const reponse = await axios.post("")
				dispatch( updateCurrentUserAction())
			}catch(error)
			{
				console.error(error);
			}
		}
	}
*/

/*
	This thunk is to delete the user from the database base 

	export const deleteCurrentUserAction = () => {
		return async (dispatch) => {
		try{
			const reponse = await axios.delete("")
			dispatch(deleteCurrentUserAction())
		}catch(error)
		{
			console.error(error)
		}
		}
	}

*/

//This the thunk to get the user that login valid from the database
// export const getTheUserFromDateBase = () => {
// 	return async (dispatch) => {
// 		try {
// 			const reponse = await axios.get("");
// 			dispatch(addCurrentUserToStateAction(reponse.data));
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
// };
