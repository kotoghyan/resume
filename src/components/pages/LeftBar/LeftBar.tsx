import React from 'react';
import classes from './classes.module.css'
import Profession from "./Profession/Profession";
import NavBar from "./NavBar/NavBar";

const LeftBar = () => {
    return (
        <div className={classes.root}>
            <Profession />
            <NavBar/>
        </div>
    );
};

export default LeftBar;