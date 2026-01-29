import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'; // Assuming this now contains objects
import './Skills.css';

function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills" id="skills">
            <div className="skillsHeader">
                <h1 style={{color: theme.primary}}>Compétences du Plan d'Études</h1>
            </div>

            <div className="skillsGrid">
                {skillsData?.length > 0 ?
                    (skillsData.map((skill, id) => (
                    <div
                        className="skillCard"
                        key={id}
                    >
                        <div className="skillCardHeader">
                            {skill.icon}
                            <h3>{skill.name}</h3>
                        </div>

                        <div className="skillContent">
                            <p className="skillDesc">
                                {skill.description}
                            </p>
                        </div>

                        {/* Decorative Technical Corner */}
                        <div className="cardCorner" style={{borderRightColor: 'var(--item-primary)'}}></div>
                    </div>
                ))) : <p></p>}
            </div>
        </div>
    );
}

export default Skills;