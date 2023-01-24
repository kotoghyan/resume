import React from 'react';
import classes from './classes.module.css'

const MenuButton = () => {
    return (
        <div className={classes.root}>
           <div className={classes.line}></div>
           <div className={classes.line}></div>
           <div className={classes.line}></div>
        </div>
    );
};

export default MenuButton;