import React from 'react';
import classes from './classes.module.css'
import {useLanguage} from "../../../../Providers/LanguageProvider";
import {Lang} from "../../../../Providers/type";
import ruFlag from '../../../icon/flag/ru.png'
import usFlag from '../../../icon/flag/us.png'

const Profession = () => {
    const {t, setLanguage, language, l} = useLanguage();

    return (
        <div className={classes.root}>
            <div className={classes.flag}>
                <button onClick={() => setLanguage(Lang.en)}><img src={usFlag} /></button>
                <button onClick={() => setLanguage(Lang.ru)}><img src={ruFlag} /></button>
            </div>
            <h1>{l.general.firstName} {l.general.name}</h1>
            <h2>{l.general.profession}</h2>
            <img src={l.general.img} alt='photo'/>
        </div>
    );
};

export default Profession;