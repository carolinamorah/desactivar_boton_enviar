import React from "react";

const Button = ({abled}) => {
    if (abled) 
    return (
        <button className="btn btn-secondary login btn-lg" type="button">Login</button> 
    )

    return null   
}

export default Button