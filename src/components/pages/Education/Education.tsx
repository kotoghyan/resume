import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import {useLanguage} from "../../../Providers/LanguageProvider";


const Education = () => {
    const {l} =  useLanguage()
    const education = l.education
    return (
        <div className={classes.root}>
            <header>
                <Header title={education.title}/>
            </header>
            <div className={classes.content}>
                <div className={classes.item}>
                    <div className={classes.title}>
                        <div className={classes.doth}></div>
                        <h1>{education.programming.name}</h1>
                    </div>
                    <div className={classes.description}>
                        <strong>{education.programming.educationalCenter}</strong>
                        <span>{education.programming.location.street},
                             {education.programming.location.city},
                            {education.programming.location.country} </span>
                        <p>{education.programming.start} - {education.programming.end}</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.title}>
                        <div className={classes.doth}></div>
                        <h1>{education.javaScript.name}</h1>
                    </div>
                    <div className={classes.description}>
                        <strong>{education.javaScript.educationalCenter}</strong>
                        <span>{education.javaScript.location.city},
                            {education.javaScript.location.country} </span>
                        <p>{education.javaScript.start} - {education.javaScript.end}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Education;