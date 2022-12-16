import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";

const JavaScript = () => {
    const javaScript = useContext(UserContext)
    const {title} = javaScript.jsSkills
    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
            </div>

        </div>
    );
};

export default JavaScript;