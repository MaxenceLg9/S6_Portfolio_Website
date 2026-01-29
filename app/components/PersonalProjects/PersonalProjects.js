import React, { useContext } from 'react';
// 1. Remove Link import
import { makeStyles } from '@mui/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import {personalProjetsData} from '../../data/projectsData';
import { HiArrowRight } from "react-icons/hi";

import './Projects.css';
import { SinglePersonalProject } from './SingleProject/SinglePersonalProject';

// 2. Accept setView as a prop from the parent
function GroupProjects({ setView }) {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {personalProjetsData.length > 0 && (
                <div className="projects">
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projets personnels</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {personalProjetsData?.length > 0 ?
                                (personalProjetsData.slice(0, 5).map(project => (
                                SinglePersonalProject({
                                    theme: theme,
                                    id: "pp-" + project.id,
                                    name: project.projectName,
                                    desc: project.projectDesc,
                                    tags: project.tags,
                                    code: project.code,
                                    demo: project.demo,
                                    image: project.image,
                                    setView: setView
                                })
                            ))) : <p></p>}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GroupProjects;