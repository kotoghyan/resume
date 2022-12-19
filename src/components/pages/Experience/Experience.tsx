import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";
import aditiveLogo from './logo/ADiteve.png'
import digistepLogo from './logo/digistep.png'

const Experience = () => {
    const experience = useContext(UserContext);
    const {title, company, Freelance} = experience.experience;

    const aditeve = company.ADiteve
    const loc = company.ADiteve.location
    const job = String.raw`${aditeve.aboutJob}`

    const digiStep = company.DigiStep

    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
                <div className={classes.item}>
                    <div className={classes.subTitle}>
                        <img src={aditiveLogo} className={classes.aditiveLogo}/>
                        <h1> {company.ADiteve.name}</h1>
                        <span>{loc.street}, {loc.city}, {loc.country}</span>
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
                        <h1>{Freelance.name}</h1>
                    </div>
                    <div className={classes.jobInfo}>
                        <span>{Freelance.start} - Present</span>
                        <span><pre><code>{Freelance.aboutJob}</code></pre></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;