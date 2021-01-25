import React from 'react';

const UserLoginView = () => {
    return(
    <div>
    <form>
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
export default UserLoginView;
//this gets sent to the index.js file in the views folder