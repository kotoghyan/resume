import React, {useContext} from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import UserContext from "../../../Provider/Context";
import {AddressSvg, PhoneSvg} from "./icon/index";

const Contact = () => {
    const contact = useContext(UserContext)
    const {title, social, phone, Nationality, email, dateOfBirth, address} = contact.contacts
    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
                <div className={classes.leftInfoBlock}>
                    <div className={classes.block}>
                        <AddressSvg/>
                        <span>{address.country} {address.city} {address.street}</span>
                    </div>
                    <hr/>
                    <div className={classes.block}>
                        <PhoneSvg/>
                        <span>{address.country} {address.city} {address.street}</span>
                    </div>
                    <hr/>

                </div>

            </div>

        </div>
    );
};

export default Contact;