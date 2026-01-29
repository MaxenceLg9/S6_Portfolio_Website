import React, { useContext } from 'react';
// 1. Remove Link import
import { makeStyles } from '@mui/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { groupProjectsData } from '../../data/projectsData';
import { HiArrowRight } from "react-icons/hi";

import './Projects.css';
import { SingleGroupProject } from './SingleProject/SingleGroupProject';


// 2. Accept setView as a prop from the parent
function GroupProjects({ setView }) {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {groupProjectsData.length > 0 && (
                <div className="projects" id="projects">
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projets de Groupe</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {groupProjectsData.slice(0, 5).map(project => (
                                SingleGroupProject({
                                    id: "gp-" + project.id,
                                    name: project.projectName,
                                    desc: project.projectDesc,
                                    tags: project.tags,
                                    code: project.code,
                                    demo: project.demo,
                                    image: project.image,
                                    skills: project.skills,
                                    setView: setView
                                })
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GroupProjects;