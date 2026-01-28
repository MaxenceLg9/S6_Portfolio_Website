import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'; // Assuming this now contains objects
import './Skills.css';

function Skills() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="skills" id="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h1 style={{color: theme.primary}}>Compétences du Plan d'Études</h1>
            </div>

            <div className="skillsGrid">
                {skillsData.map((skill, id) => (
                    <div
                        className="skillCard"
                        key={id}
                        style={{ backgroundColor: 'var(--item-secondary100)', borderColor: 'var(--item-primary)' }}
                    >
                        <div className="skillCardHeader">
                            <img
                                src={`/logo/${skill.name.toLowerCase().replace(" ","_")}.svg`}
                                alt={skill.name}
                                className="skillIcon"
                            />
                            <h3 style={{color: 'var(--item-tertiary)'}}>{skill.name}</h3>
                        </div>

                        <div className="skillContent">
                            <p className="skillDesc" style={{color: 'var(--item-tertiary)'}}>
                                {skill.description}
                            </p>
                            <div className="skillTags">
                                {skill.subSkills.map((sub, index) => (
                                    <span key={index} className="subSkillTag">
                                        {sub}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Technical Corner */}
                        <div className="cardCorner" style={{borderRightColor: 'var(--item-primary)'}}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;