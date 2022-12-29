import React, {useContext} from 'react';
import classes from './app.module.css';
import LeftBar from "./components/pages/LeftBar/LeftBar";
import {Route, Routes} from "react-router-dom";
import Education from "./components/pages/Education/Education";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Experience from "./components/pages/Experience/Experience";
import Skills from "./components/pages/Skills/Skills";
import JavaScript from "./components/pages/JavaScript/JavaScript";
import Languages from "./components/pages/Languages/Languages";
import Contact from "./components/pages/Contact/Contact";

function App() {
    return (
        <div className={classes.root}>
            <LeftBar/>
            <Routes>
                <Route path={'/'} element={<AboutMe/>}/>
                <Route path={'/education'} element={<Education />}/>
                <Route path={'/experience'} element={<Experience/>}/>
                <Route path={'/skills'} element={<Skills/>}/>
                <Route path={'javaScript'} element={<JavaScript/>}/>
                <Route path={'languages'} element={<Languages/>}/>
                <Route path={'contact'} element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;
