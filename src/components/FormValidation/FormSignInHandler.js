import { useState } from "react";

const FormSignInHandler = (UseFormLoginValidation, handleIsLogin) => {
	const [formInfo, setFormInfo] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

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
		setErrors(recieveError);
		if (
			Object.keys(recieveError).length === 0 &&
			recieveError.constructor === Object
		) {
			handleIsLogin(true);
		}
	};

	return { handleChange, formInfo, handleSubmit, errors };
};

export default FormSignInHandler;
