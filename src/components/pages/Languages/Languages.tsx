import React, {useContext, useEffect, useState} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";
import LangBox from "./LangBox/LangBox";

const Languages = () => {
    const languages = useContext(UserContext)
    const {title,armenian,english,russian} = languages.languages;
    const lang = [armenian, english, russian]

    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
                {lang.map((el,i) => {
                   return  <LangBox key={el.lang} lang={el.lang} know={el.know} />
                })}
            </div>

        </div>
    );
};

export default Languages;