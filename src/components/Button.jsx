import React from "react";

const Button = ({username, password}) => {
    if (password !== "252525" || password === '' || username === '') return (
        <button className="btn btn-outline-dark login btn-lg" type="button" disabled>Login</button> 
    );
    
    if (username !== '' && password === "252525") return (
        <button className="btn btn-secondary login btn-lg" type="button">Login</button>
    )
}

export default Button