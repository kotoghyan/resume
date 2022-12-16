import React from 'react';
import classes from './classes.module.css'
import education from '../../../icon/education.svg'
import {
    AboutMeSvg,
    ContactSvg,
    EducationSvg,
    ExperienceSvg,
    JavascriptSvg,
    LanguagesSvg,
    SkillsSvg
} from "../../../icon";
import {NavLink} from "react-router-dom";

type  ParamType = {
    "isActive":boolean ,
    "isPending": boolean,
}

const LeftBar = () => {
    const setActiveClass = ({isActive}:ParamType) => {
        return isActive ? classes.active : ''
    }
    return (
        <nav className={classes.root}>
            <NavLink to='/' className={setActiveClass}><AboutMeSvg /> About Me</NavLink>
            <NavLink to='/education' className={setActiveClass}><EducationSvg/> Education</NavLink>
            <NavLink to='/experience' className={setActiveClass}><ExperienceSvg/> Experience</NavLink>
            <NavLink to='/skills' className={setActiveClass}><SkillsSvg/> Skills</NavLink>
            <NavLink to='/javaScript' className={setActiveClass}><JavascriptSvg/> JavaScript</NavLink>
            <NavLink to='/languages' className={setActiveClass}><LanguagesSvg /> Languages</NavLink>
            <NavLink to='/contact' className={setActiveClass}><ContactSvg /> Contact</NavLink>
        </nav>
    );
};

export default LeftBar;