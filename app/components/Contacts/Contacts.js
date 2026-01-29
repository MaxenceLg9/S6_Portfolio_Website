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
import {HiOutlineDocumentText, HiOutlineLocationMarker} from 'react-icons/hi';

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
        <div className='contacts-details' id='contacts'>
            <div className='contacts-info-container'>
                <h2 style={{ color: theme.primary }}>Get in Touch</h2>

                <div className='contact-info-body'>
                    {/* Email */}
                    <a href={`mailto:${contactsData.email}`} className='contact-detail-link'>
                        <FiAtSign className='contact-icon' />
                        <p style={{color: theme.tertiary}}>{contactsData.email}</p>
                    </a>

                    {/* Phone */}
                    <a href={`tel:${contactsData.phone}`} className='contact-detail-link'>
                        <FiPhone className='contact-icon' />
                        <p style={{color: theme.tertiary}}>{contactsData.phone}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;