import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Image from "next/image";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" >
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>

                <div className="about-img">
                    <Image
                        src="/img/network_world.webp"
                        width={1000}  // Must be a number, no 'px'
                        height={1000} // Height is mandatory unless you use "fill"
                        alt="Working icon"
                    />
                </div>
            </div>
        </div>

    )
}

export default About
