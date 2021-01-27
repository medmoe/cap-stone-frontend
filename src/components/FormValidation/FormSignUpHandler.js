import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCurrentUserToStateAction } from "../../Redux/Actions/currentUser";
import { addCookiesAction } from "../../Redux/Actions/login";

const FormSignUpHandler = (UseFormSignUpValidation, handleIsLogin) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [formInfo, setFormInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	let [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormInfo({
			...formInfo,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let recieveError = await UseFormSignUpValidation(formInfo);
		localStorage.setItem("name", formInfo.email);

		if (recieveError === undefined) {
			dispatch(addCurrentUserToStateAction(formInfo));
			dispatch(addCookiesAction(true));
			history.push("/userProfile");
		} else {
			setErrors(recieveError);
		}
	};

	return { handleChange, formInfo, handleSubmit, errors };
};

export default FormSignUpHandler;
