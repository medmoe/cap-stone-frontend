import React, { useState } from 'react';


const UserLoginView = () => {
    

    const UseFormLoginValidation = (formObject) => {
        let errors = {};

        // const dispatch = useDispatch();
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

    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errorMessage, setErrorMessage] = useState({});

    
    const handleSubmit = (e) => {
        e.preventDefault();
        let userLogin = {
            email,
            password,
        }

        
        const isValid = UseFormLoginValidation(userLogin);


        let isThereAnyError = false; //This variable help us keep track whether or not the errors object is empty
    
        for (let element in isValid) {
            if (isValid.hasOwnProperty(element)) {
                //This will loop through the error object to find whether or not it is empty
                isThereAnyError = true;
            }
        }
    
        if (isThereAnyError) {
            setErrorMessage(isValid);
        } else {
            setemail("");
            setpassword("");
            setErrorMessage({});
            console.log("it works");
            //do an axios post call to checkever or not the user is in database
            //get a response back from the database
            /*
                if(the reponse saying the user does not exist)
                    errors.usernotfound = "The user does not exist in the database"
                else
                    get the reponse of the user data from database and pass it to 
                    the currentUser REDUX
                    dispatch(getTheUserFromDateBase(reponse));
                    send  use to user profile
            */
        }
    

    }



    const handleChange = (e) => {
        let {name} = e.target;
        let {value} = e.target;

        switch (name) {
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
export default UserLoginView;
//this gets sent to the index.js file in the views folder