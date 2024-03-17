import React, {useContext} from 'react';


import classes from './Button.Module.css';
import AuthContext from "../context/AuthContext";

const Button = (props) => {
    let ctx = useContext(AuthContext)
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onLogout}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
