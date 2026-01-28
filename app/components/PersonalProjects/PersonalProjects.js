import React, { useContext } from 'react';
// 1. Remove Link import
import { makeStyles } from '@mui/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import {personalProjetsData} from '../../data/projectsData';
import { HiArrowRight } from "react-icons/hi";

import './Projects.css';
import SingleProject from './SingleProject/SingleProject';

// 2. Accept setView as a prop from the parent
function GroupProjects({ setView }) {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {personalProjetsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects personnels</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {personalProjetsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                    // 3. (Optional) If SingleProject needs to link to a detail page:
                                    setView={setView}
                                />
                            ))}
                        </div>

                        {personalProjetsData.length > 3 && (
                            <div className="projects--viewAll">
                                {/* 4. Replace <Link> with a button call */}
                                <button
                                    className="viewAllBtn"
                                    onClick={() => setView('projects')}
                                >
                                    View All
                                    <HiArrowRight className="viewArr" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default GroupProjects;