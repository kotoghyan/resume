import React from 'react';
import classes from './classes.module.css'
import {MyResume} from "../../../MyResume/MyResume";

type Props = {
    title:string  //todo esi petqa chisht ban mtni mej@
}

const Header = ({title}:Props ) => {
    return (
        <div className={classes.root}>
            <h1>{title}</h1>
        </div>
    )
};

export default Header;