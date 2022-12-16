import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";

const Experience = () => {
    const experience = useContext(UserContext);
    const {title} = experience.experience;

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

export default Experience;