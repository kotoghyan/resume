import React from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import  {useLanguage} from "../../../Providers/LanguageProvider";
import aditiveLogo from './logo/ADiteve.png'
import digistepLogo from './logo/digistep.png'



const Experience = () => {
    const {l} = useLanguage()
    const aditeve = l.experience.company.ADiteve


    const digiStep = l.experience.company.DigiStep

    return (
        <div className={classes.root}>
            <header>
                <Header title={l.experience.title}/>
            </header>
            <div className={classes.content}>
                <div className={classes.item}>
                    <div className={classes.subTitle}>
                        <img src={aditiveLogo} className={classes.aditiveLogo}/>
                        <h1> {aditeve.name}</h1>
                        <span>{aditeve.location.street}, {aditeve.location.city}, {aditeve.location.country}</span>
                    </div>
                    <div className={classes.jobInfo}>
                        <h2>{aditeve.vacancy}</h2>
                        <span>{aditeve.start} - Present</span>
                        <span><pre><code>{aditeve.aboutJob}</code></pre></span>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.subTitle}>
                        <img src={digistepLogo} className={classes.digistepLogo}/> <h1>{digiStep.name}</h1>
                        <span>{digiStep.location.city}</span>
                    </div>
                    <div className={classes.jobInfo}>
                        <h2>{digiStep.aboutJob}</h2>
                        <span>{digiStep.start} - {digiStep.end}</span>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.jobInfo}>
                        <h1>{l.experience.Freelance.name}</h1>
                    </div>
                    <div className={classes.jobInfo}>
                        <span>{l.experience.Freelance.start} - Present</span>
                        <span><pre><code>{l.experience.Freelance.aboutJob}</code></pre></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;