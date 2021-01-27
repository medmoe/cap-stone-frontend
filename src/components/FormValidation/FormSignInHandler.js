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
		setErrors(await UseFormLoginValidation(formInfo));
		if (Object.keys(errors).length === 0 && errors.constructor === Object) {
			handleIsLogin(true);
		}
	};

	return { handleChange, formInfo, handleSubmit, errors };
};

export default FormSignInHandler;
