import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";

type Props = {

}
const AboutMe = () => {
    const aboutMe = useContext(UserContext)
    const {title}  = aboutMe.aboutMe
    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>

            </div>

        </div>
    );
};

export default AboutMe;