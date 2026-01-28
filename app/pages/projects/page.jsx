'use client'

import React, { useContext, useState } from 'react';
// 1. Swap the broken library for the async version
import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AiOutlineHome } from "react-icons/ai";

import './ProjectPage.css';
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { groupProjectsData, personalProjetsData } from '../../data/projectsData';
import { headerData } from '../../data/headerData';

function ProjectPage({ setView }) {
    const [search, setSearch] = useState('');
    const { theme } = useContext(ThemeContext);

    const filteredArticles = groupProjectsData.filter((project) => {
        // Safe check for tags to prevent join errors
        const projectTags = project.tags ? project.tags.join(' ') : '';
        const content = project.projectName + project.projectDesc + projectTags;
        return content.toLowerCase().includes(search.toLowerCase());
    });

    const useStyles = makeStyles((t) => ({
        search : {
            color: theme.tertiary,
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.secondary,
            boxShadow: theme.type === 'dark'
                ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060'
                : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80,
            },
            '@media (max-width: 600px)': {
                width: '300px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: '3px 3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            {/* 2. Using the async version of Helmet here */}
            <Helmet>
                <title>{headerData.name} | Projects</title>
            </Helmet>

            <div className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <AiOutlineHome
                    className={classes.home}
                    onClick={() => {
                        setView('main');
                        window.scrollTo(0, 0);
                    }}
                    aria-label="Back to Home"
                />
                <h1 style={{color: theme.secondary}}>Projects</h1>
            </div>
            <div className="projectPage-container">
                <div className="projectPage-search">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search project..."
                        className={classes.search}
                    />
                </div>
                <div className="project-container">
                    <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.map(project => (
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
                                setView={setView}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;