import React from 'react';
import classes from './classes.module.css'
import Profession from "./Profession/Profession";
import NavBar from "./NavBar/NavBar";
import MenuButton from "./MenuButton/MenueButton";

const LeftBar = () => {
    return (
        <div className={classes.root}>
            {/*<MenuButton />*/}
            <Profession />
            <NavBar/>
        </div>
    );
};

export default LeftBar;