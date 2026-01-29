import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Tools.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { toolsData } from '../../data/toolsData'

function Tools() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills">
            <div className="skillsHeader">
                <h1 style={{color: theme.primary}}>Outils</h1>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {toolsData.map((skill, id) => (
                            <div className="skill--box" key={id}>
                                {/* Added alt text for better accessibility scores */}
                                <img src={`/logo/${skill.toString().toLowerCase().replace(" ","_")}.svg`} alt={`${skill} icon`} />
                                <h3 style={{color: theme.tertiary}} className=''>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Tools;