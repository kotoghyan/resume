import React from 'react';
import classes from './classes.module.css'
import classNames from "classnames";

type Props = {
    lang: string
    know: string
}

const LangBox = ({lang,know}:Props) => {

    return (
        <div className={classes.root} >
            <div className={classes.container}>
                <div className={classes.card}>
                    <div className={classNames([classes.face, classes.face1])}>
                        <div className={classes.content}>
                            <h2>{lang}</h2>
                        </div>
                    </div>
                    <div className={classNames([classes.face, classes.face2])}>
                        <div className={classes.content}>
                            <h2>{know}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LangBox;