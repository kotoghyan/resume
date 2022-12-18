import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";

const Experience = () => {
    const experience = useContext(UserContext);
    const {title,company,Freelance} = experience.experience;

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
                <div className={classes.company}>
                    <div className={classes.item}>
                        <h2>{company.ADiteve.name}</h2>
                        <ul>
                            <li>{aditeve.vacancy}</li>
                            <li>{aditeve.start} - Present</li>
                            <li>{loc.street}, {loc.city}, {loc.country}</li>
                            <li><pre><code>{aditeve.aboutJob}</code></pre></li>
                        </ul>
                    </div>
                    <div className={classes.item}>
                        <h2>{digiStep.name}</h2>
                        <ul>
                            <li>{digiStep.aboutJob}</li>
                            <li>{digiStep.start} - {digiStep.end}</li>
                            <li>{digiStep.location.city}</li>
                        </ul>
                    </div>
                    <div className={classes.item}>
                        <h2>{Freelance.name}</h2>
                        <ul>
                            <li>{Freelance.start} - Present</li>
                            <li><pre><code>{Freelance.aboutJob}</code></pre></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;