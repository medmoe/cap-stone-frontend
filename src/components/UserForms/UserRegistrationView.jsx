import axios from 'axios';
import React, {useState} from 'react';
// import {useFormLoginValidation} from '../../FormValidation';






const UserRegistrationView = () => {

    
    const UseFormRegistrationValidation = (formObject) => {
        let errors = {};
    
        //Check if the first name is empty. If it is empty, give the errors object the error String
        if (!formObject.firstname.trim()) {
             errors.firstname= "Firstname required!";
        } else if (formObject.firstname.length < 2) {
            //Check if the first name is short. If it is short, give the errors object the error String
            errors.firstname = "Firstname must be longer than one character";
        }
    
        //Check if the first name is empty. If it is empty, give the errors object the error String
        if (!formObject.lastname.trim()) {
            errors.lastname = "Lastname required!";
        } else if (formObject.lastname.length < 2) {
            //Check if the last name is short. If it is short, give the errors object the error String
            errors.lastname = "Lastname must be longer than one character";
        }
    
        //Check if the email is empty. If it is empty, give the errors object the error String
        if (!formObject.email) {
            errors.email = "Email required!";
        } else if (!/\S+@\S+\.\S+/.test(formObject.email)) {
            //Check if the email is valid WITH THE "@" If it is not valid, give the errors object the error String
            errors.email = "Please provide a valid email";
        }
    
        //Check if the password is empty. If it is empty, give the errors object the error String
        if (!formObject.password) {
            errors.password = "Please provide a pasword";
        } else if (formObject.password.length < 6) {
            //Check if the password is 6 characters or longer. If it is short, give the errors object the error String
            errors.password = "Password need to be longer than 6 characters";
        }
    
        return errors;
    };


    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({});     




    const handleSubmit = (e) =>{
        
        e.preventDefault();
        let userInfo = {
            firstname,
            lastname,
            email,
            password,
        }
        
        const isValid = UseFormRegistrationValidation(userInfo);

        var isThereAnyError = false;



        for (let element in isValid) {
            if (isValid.hasOwnProperty(element)) {
                //This will loop through the error object to find whether or not it is empty
                isThereAnyError = true;
            }
        }

        if(isThereAnyError == false) {
            setfirstname("");
            setlastname("");
            setemail("");
            setpassword("");
            console.log("sucess");
            setErrorMessage({});

            // axios
            //     .post(..., userInfo)
            //      

        }else{
            setErrorMessage(isValid)
        }
       
    }

    const handleChange = (e) => {
        let {name} = e.target;
        let {value} = e.target;

        switch (name) {
            case "firstname":
                setfirstname(value);
                break;
            case "lastname":
                setlastname(value);
                break;
            case "email":
                setemail(value);
                break;
            case "password":
                setpassword(value);
                break;
            default:
                break;
        }
    }



return(
    <div>
        <form onSubmit = {handleSubmit}>
            <label for = "firstname" > First Name:</label>
            <input type ="text" key = "firstname" name = "firstname"
            onChange = {handleChange} value = {firstname}></input>
            <div>{errorMessage.firstname}</div>
            <br></br>
            
            <label for = "lastname" > Last Name:</label>
            <input type ="text" key = "lastname" name = "lastname" onChange = {handleChange} value = {lastname}></input>
            <div>{errorMessage.lastname}</div>
            <br></br>
    
            <label for = "email" > Email:</label>
            <input type ="text" key = "email" name = "email" onChange = {handleChange} value = {email}></input>
            <div>{errorMessage.email}</div>
            <br></br>
    
            <label for = "password" > Password:</label>
            <input type ="password" id = "password" name = "password" onChange = {handleChange} value = {password}></input>
            <div>{errorMessage.password}</div>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
)

        
}
export default UserRegistrationView;

//this gets sent to the index.js file in the views folder