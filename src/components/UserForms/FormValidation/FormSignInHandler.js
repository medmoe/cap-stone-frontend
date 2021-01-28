import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCurrentUserToStateAction } from "../../../Redux/Actions/currentUser";
import { addCookiesAction } from "../../../Redux/Actions/login";

const FormSignInHandler = (UseFormLoginValidation) => {
	const [formInfo, setFormInfo] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const history = useHistory();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormInfo({
			...formInfo,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let recieveError = await UseFormLoginValidation(formInfo);

		if (recieveError.data.loggedIn === true) {
			console.log("here");
			dispatch(addCookiesAction(recieveError.data.loggedIn));
			dispatch(addCurrentUserToStateAction(recieveError.data.user));
			history.push("/userProfile");
		} else {
			setErrors(recieveError);
		}
	};

	return { handleChange, formInfo, handleSubmit, errors };
};

export default FormSignInHandler;
