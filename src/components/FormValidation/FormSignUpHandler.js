import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentUserToStateAction } from "../../Redux/Actions/currentUser";

const FormSignUpHandler = (UseFormSignUpValidation, handleIsLogin) => {
	const dispatch = useDispatch();

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

		if (recieveError === undefined) {
			dispatch(addCurrentUserToStateAction(formInfo));
			handleIsLogin(true);
		} else {
			setErrors(recieveError);
		}
	};

	return { handleChange, formInfo, handleSubmit, errors };
};

export default FormSignUpHandler;
