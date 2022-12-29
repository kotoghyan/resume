import React from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import {useLanguage} from "../../../Providers/LanguageProvider";
import {Lang} from "../../../Providers/type";

const AboutMe = () => {
    const {t, setLanguage, language,l} = useLanguage();


    return (
        <div className={classes.root}>

            <header>
                <Header title={l?.aboutMe?.title}/>
            </header>
            <div className={classes.content}>

            </div>

        </div>
    );
};

export default AboutMe;