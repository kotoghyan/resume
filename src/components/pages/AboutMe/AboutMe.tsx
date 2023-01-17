import React from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import {useLanguage} from "../../../Providers/LanguageProvider";

const AboutMe = () => {
    const {l} = useLanguage();


    return (
        <div className={classes.root}>

            <header>
                <Header title={l.aboutMe.title}/>
            </header>
            <div className={classes.content}>
                <p>{l.aboutMe.about}</p>
            </div>

        </div>
    );
};

export default AboutMe;