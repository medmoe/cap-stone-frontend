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
		setErrors(await UseFormSignUpValidation(formInfo));
		if (Object.keys(errors).length === 0 && errors.constructor === Object) {
			dispatch(addCurrentUserToStateAction(formInfo));
			handleIsLogin(true);
		}
	};

	return { handleChange, formInfo, handleSubmit, errors };
};

export default FormSignUpHandler;
