import React from 'react';
import classes from './classes.module.css'
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
import {useLanguage} from "../../../../Providers/LanguageProvider";

type  ParamType = {
    "isActive": boolean,
    "isPending": boolean,
}

const LeftBar = () => {
    const {t} = useLanguage()
    const setActiveClass = ({isActive}: ParamType) => {
        return isActive ? classes.active : ''
    }
    return (
        <div className={classes.main}>
            <nav className={classes.root}>
                <NavLink to='/' className={setActiveClass}><AboutMeSvg/>{t('aboutMe')}</NavLink>
                <NavLink to='/education' className={setActiveClass}><EducationSvg/>{t('education')}</NavLink>
                <NavLink to='/experience' className={setActiveClass}><ExperienceSvg/> {t('experience')}</NavLink>
                <NavLink to='/skills' className={setActiveClass}><SkillsSvg/>{t('skills')}</NavLink>
                <NavLink to='/javaScript' className={setActiveClass}><JavascriptSvg/>{t('javaScript')}</NavLink>
                <NavLink to='/languages' className={setActiveClass}><LanguagesSvg/>{t('languages')}</NavLink>
                <NavLink to='/contact' className={setActiveClass}><ContactSvg/>{t('contact')}</NavLink>
            </nav>
            <div className={classes.container}>
                <div className={classes.link}>
                    <a href='CV/CV.pdf' download='CV/CV.pdf'>{t('downloadCV')}</a>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;