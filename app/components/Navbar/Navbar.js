'use client'

import React, { useContext, useState } from 'react';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
// Use @mui/styles for the legacy makeStyles pattern in React 19
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
    const { theme } = useContext(ThemeContext);

    const navItems = [
        { id: 'home', text: 'Accueil', icon: <IoHomeSharp />, href: '#home' },
        { id: 'about', text: 'A propos', icon: <FaUser />, href: '#about' },
        { id: 'resume', text: 'CV', icon: <HiDocumentText />, href: '/resume' },
        { id: 'projects', text: 'Projets', icon: <FaFolderOpen />, href: "/pages/projects/" }, // Switches view entirely
        { id: 'contacts', text: 'Contact', icon: <MdPhone />, href: '#contacts' },
    ];

    return (
        <nav className='navbar'>
            <div className='navbar--container'>
                <h1 className="nav-logo" style={{ color: '#ffffff' }}>
                    {headerData.name.split(' ')[0]}<span style={{ color: theme.primary }}>.</span>
                </h1>
                <div className='navbarRight'>
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.id} onClick={item.action} className='drawer-item'>
                            {React.cloneElement(item.icon, { className: 'drawer-icon' })}
                            <span className='drawer-links'>{item.text}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;