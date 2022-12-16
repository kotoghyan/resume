import React, {useContext} from 'react';
import classes from './classes.module.css'
import photo from  '../../../image/photo.jpg'
import UserContext from "../../../../Provider/Context";

const Profession = () => {
    const general = useContext(UserContext);
    const {profession,name,firstName,img} = general.general;
    return (
        <div className={classes.root}>
                <h1>{firstName} {name}</h1>
                <h2>{profession}</h2>
                <img src={img} alt='photo'/>
        </div>
    );
};

export default Profession;