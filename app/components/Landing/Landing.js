import React, {useContext, useEffect, useState} from 'react';
import { Button } from '@mui/material'; // Modern MUI import
import { makeStyles } from '@mui/styles'; // React 19 compatible styles
import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import Scramble from './Scramble';

import {
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';
import ScrambleText from "./Scramble";
import Background from "../Background/background";
import Link from "next/link";
import {scrollToSection} from "../ScrollToSection/ScrollToSection";

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    // Manual scroll function for the Contact butto

    const [isEnglish, setIsEnglish] = useState(true);

    return (
        <div className='landing' id="home">
            <div className='landing--container'>
                <div className='landing--container-left'>
                    <div className='lcl--content'>
                        {/* Social Links remain as <a> tags for external navigation */}
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target='_blank' rel='noreferrer'>
                                <FaLinkedin className='landing--social' style={{ color: theme.primary }} aria-label='LinkedIn' />
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target='_blank' rel='noreferrer'>
                                <FaGithub className='landing--social' style={{ color: theme.tertiary }} aria-label='GitHub' />
                            </a>
                        )}
                        {/* Add other socials here following the same pattern */}
                    </div>
                </div>

                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />

                <div className='landing--container-right'>
                    <div className="toggle-container" onClick={() => setIsEnglish(!isEnglish)}>
                        <div className={`toggle-pill ${isEnglish ? 'pill-en' : 'pill-fr'}`} />
                        <div className="toggle-labels">
                            <span className={!isEnglish ? 'active-text' : ''}>FR</span>
                            <span className={isEnglish ? 'active-text' : ''}>EN</span>
                        </div>
                    </div>
                    <div className='lcr--content' style={{ color: theme.tertiary }}>
                        <div className="frames-wrapper">
                            {/* English Frame */}
                            <div className={`frame ${isEnglish ? 'frame-active' : 'frame-exit'}`}>
                                <h3><span className="pulse-dot"></span><ScrambleText key={`fr-title-${isEnglish}`} text="Apprentice Cybersecurity Engineer"/></h3>
                                <h1>{headerData.name}</h1>
                                <p>{headerData.desciption}</p>
                            </div>

                            {/* French Frame */}
                            <div className={`frame ${!isEnglish ? 'frame-active' : 'frame-exit'}`}>
                                <h3><span className="pulse-dot"></span><ScrambleText key={`fr-title-${isEnglish}`} text={headerData.title} /></h3>
                                <h1>{headerData.name}</h1>
                                <p>{headerData.desciption}</p>
                            </div>
                        </div>


                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf} download='resume' target='_blank' rel='noreferrer'>
                                    <button className='resumeBtn'>
                                        {isEnglish ? "Download CV" : "Téléchargez le CV" }
                                    </button>
                                </a>
                            )}
                            {/* Replaced NavLink <>with a Button + handleContactClick */}
                            <span onClick={() => scrollToSection("contacts")} className='contactBtn' > Contact</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Landing;