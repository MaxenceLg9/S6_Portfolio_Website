import React from 'react';
import { makeStyles } from '@mui/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';
import Image from "next/image";

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {

    return (
        <div
            key={id}
            className='singleProject'
            style={{ backgroundColor: theme.primary400 }}
        >
            <div className='projectContent'>
                <h2
                    id={name.replace(/\s+/g, '-').toLowerCase()}
                    style={{ color: theme.tertiary }}
                >
                    {name}
                </h2>

                {/* The image that fades out on hover */}
                <Image
                    src={image ? image : placeholder}
                    alt={name}
                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                />

                <div className='project--showcaseBtn'>
                    <a
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                        className="iconBtn"
                    >
                        <FaPlay className="icon" aria-label='Demo' />
                    </a>
                    <a
                        href={code}
                        target='_blank'
                        rel='noreferrer'
                        className="icon"
                    >
                        <FaCode className="icon" aria-label='Code' />
                    </a>
                </div>
            </div>

            {/* These elements slide in based on your CSS transform: translate logic */}
            <p
                className='project--desc'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary,
                }}
            >
                {desc}
            </p>
            <div
                className='project--lang'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary,
                }}
            >
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default SingleProject;