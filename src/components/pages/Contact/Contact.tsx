import React from 'react';
import classes from './classes.module.css'
import Header from "../../Hok/Header/Header";
import {useLanguage} from "../../../Providers/LanguageProvider";
import {AddressSvg, DateOfBirthSvg, EmailSvg, PhoneSvg, SocialSvg} from "./icon/index";

const Contact = () => {
    const {l} = useLanguage();
    const {title, social, phone, Nationality, email, dateOfBirth, address} = l.contacts
    return (
        <div className={classes.root}>
            <header>
                <Header title={title}/>
            </header>
            <div className={classes.content}>
                <div className={classes.leftInfoBlock}>
                    <div className={classes.block}>
                        <AddressSvg/>
                        <span>{address.street}, {address.city}, {address.country}</span>
                    </div>
                    <hr/>
                    <div className={classes.block}>
                        <PhoneSvg/>
                        <span>{phone}</span>
                    </div>
                    <hr/>
                    <div className={classes.block}>
                        <EmailSvg/>
                        <span>{email}</span>
                    </div>
                    <hr/>
                </div>
                <div className={classes.rightInfoBlock}>
                    <div className={classes.block}>
                        <SocialSvg/>
                        <a href={social.linkedin}>Linkedin</a>
                        <a href={social.git}>Github</a>

                    </div>
                    <hr/>
                    <div className={classes.block}>
                        <DateOfBirthSvg/>
                        <span>{dateOfBirth}</span>
                    </div>
                    <hr/>
                </div>
            </div>

        </div>
    );
};

export default Contact;