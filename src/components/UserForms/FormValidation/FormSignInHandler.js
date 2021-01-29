import { useState } from "react";
import { useHistory } from "react-router-dom";

const FormSignInHandler = (UseFormLoginValidation) => {
	const [formInfo, setFormInfo] = useState({
		email: "",
		password: "",
	});
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

		if (recieveError) {
			setErrors(recieveError);
		} else {
			history.push("/userProfile");
		}
	};

	return { handleChange, formInfo, handleSubmit, errors };
};

export default FormSignInHandler;
