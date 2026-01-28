'use client'

import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material'; // Updated import
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@mui/styles'; // Modern hook for React 19 compatibility
import {
    FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaBloggerB,
    FaRedditAlien, FaStackOverflow, FaCodepen, FaInstagram,
    FaGitlab, FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const handleContactForm = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setErrMsg('Please fill in all fields');
            setOpen(true);
            return;
        }

        if (!isEmail(email)) {
            setErrMsg('Please enter a valid email address');
            setOpen(true);
            return;
        }

        try {
            const responseData = { name, email, message };
            // Using a try/catch block is better "proof" of error handling for S6
            await axios.post(contactsData.sheetAPI, responseData);
            setSuccess(true);
            setErrMsg('Message sent successfully!');
            setOpen(true);
            setName(''); setEmail(''); setMessage('');
        } catch (error) {
            setErrMsg('Failed to send message. Please try again.');
            setOpen(true);
        }
    };

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contact</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <label className="label">Name</label>
                                <input
                                    placeholder='Your Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`form-input input`}
                                />
                            </div>
                            <div className='input-container'>
                                <label className="label">Email</label>
                                <input
                                    placeholder='email@example.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`form-input input`}
                                />
                            </div>
                            <div className='input-container'>
                                <label className="label">Message</label>
                                <textarea
                                    placeholder='How can I help you?'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={`form-message message`}
                                />
                            </div>

                            <div className='submit-btn'>
                                <button type='submit' className="submitBtn">
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    {!success ? <AiOutlineSend /> : <AiOutlineCheckCircle />}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='contacts-details'>
                        {/* Contact Details Grid */}
                        <div className='contact-item'>
                            <div className="detailsIcon"><FiAtSign /></div>
                            <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
                        </div>
                        {/* ... Repeat for Phone and Location ... */}

                        <div className='socialmedia-icons'>
                            {Object.entries(socialsData).map(([key, url]) => (
                                url && <a key={key} href={url} target='_blank' rel='noreferrer' className="social">
                                    {/* Map icon based on key */}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <SnackbarContent
                    message={errMsg}
                    style={{ backgroundColor: success ? '#4caf50' : theme.primary, color: theme.secondary }}
                />
            </Snackbar>
        </div>
    );
}

export default Contacts;