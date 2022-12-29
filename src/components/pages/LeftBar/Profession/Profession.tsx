import React, {MouseEventHandler, useContext} from 'react';
import classes from './classes.module.css'
import {useLanguage} from "../../../../Providers/LanguageProvider";

const Profession = () => {
    const {l} = useLanguage()


    return (
        <div className={classes.root}>
            {/*<div>*/}
            {/*    <button onClick={changeLanguages}>en</button>*/}
            {/*    <button onClick={changeLanguages}>ru</button>*/}
            {/*</div>*/}
            <h1>{l.general.firstName} {l.general.name}</h1>
            <h2>{l.general.profession}</h2>
            <img src={l.general.img} alt='photo'/>
        </div>
    );
};

export default Profession;