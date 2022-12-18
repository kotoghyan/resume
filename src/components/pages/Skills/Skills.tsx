import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";

const Skills = () => {

    const skill = useContext(UserContext)
    const {title,skills } = skill.skills

    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
                {skills.map(el => <div key={el+'_id'} className={classes.item}> <span>{el},</span></div>)}
            </div>

        </div>
    );
};

export default Skills;