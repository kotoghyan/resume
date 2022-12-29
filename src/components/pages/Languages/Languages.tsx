import React, {useContext, useEffect, useState} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import {useLanguage} from "../../../Providers/LanguageProvider";
import LangBox from "./LangBox/LangBox";

const Languages = () => {
    const {l} =useLanguage()
    const {title,armenian,english,russian} = l.languages;
    const lang = [armenian, english, russian]

    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
                {lang.map((el,i) => {
                   return  <LangBox key={el.lang + '_id'} lang={el.lang} know={el.know} />
                })}
            </div>

        </div>
    );
};

export default Languages;