import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import {useLanguage} from "../../../Providers/LanguageProvider";

const JavaScript = () => {
    const {l,t} = useLanguage()
    const {title, js} = l.jsSkills
    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
                <div className={classes.languages}>
                    <h1>{t('languages')}</h1>
                    {js.languages.name.map(el => <h2 key={el + '_id'}>{el}</h2>)}
                </div>
                <div className={classes.libraries}>
                    <h1>{js.libraries}</h1>
                    <ul>
                        {js.subLib.map(el => <li key={el + '_id'}>{el}</li>)}
                    </ul>
                </div>
                <div className={classes.tools}>
                    <h1>Tools</h1>
                    {js.tools.map(el => <span key={el + '_id'}>{el}</span>)}
                </div>

            </div>
        </div>
    );
};

export default JavaScript;