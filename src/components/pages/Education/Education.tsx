import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";

type Props = {
    education: {
        title: string,
        programming: {
            name: string,
            educationalCenter: string,
            location: {
                country: string,
                city: string
            },
            start: string,
            end: string
        },
        javaScript: {
            name: string
            educationalCenter:string,
            location: {
                country: string,
                city: string
            },
            start: string,
            end: string
        }
    }
} //vorna chisht@
const Education = ({education}:Props) => {
    console.log(education)
    return (
        <div className={classes.root}>
            <header>
                <Header title={education.title}/>
            </header>
            <div className={classes.content}>

            </div>

        </div>
    );
};

export default Education;