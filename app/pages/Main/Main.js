import React from 'react';
// 1. Swap for the async-compatible version
import { Helmet } from 'react-helmet-async';

import {
    Navbar, Footer, Landing, About, Tools,
    Education, Experience, Contacts, GroupProjects, PersonalProjects, Skills,
} from '../../components';
import { headerData } from '../../data/headerData';

// 2. Accept setView from App.js to handle internal navigation
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            {/* Navbar usually handles the 'view' state at a global level */}
            <Navbar />

            {/* Landing often has a 'Contact Me' or 'View Work' button */}
            <Landing />

            <About />
            <Education />
            <Tools />
            <Experience />

            {/* projects has the 'View All' button which needs setView('projects') */}
            <Skills/>
            <GroupProjects />
            <PersonalProjects/>


            <Contacts />
            <Footer />
        </div>
    )
}

export default Main;