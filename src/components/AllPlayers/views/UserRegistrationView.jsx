import React from 'react';




const UserRegistrationView = () => {
    render(
        <div>
        <form>
            <label for = "firstname" > First Name:</label>
            <input type ="text" key = "firstname" name = "firstname"></input>
            <br></br>
            
            <label for = "lastname" > Last Name:</label>
            <input type ="text" key = "lastname" name = "lastname"></input>
            <br></br>
    
            <label for = "email" > Email:</label>
            <input type ="text" key = "email" name = "email"></input>
            <br></br>
    
            <label for = "password" > Password:</label>
            <input type ="password" id = "password" name = "password"></input>
            <br></br>
        </form>
    </div>
    )
}
export default UserRegistrationView;

//this gets sent to the index.js file in the views folder