import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'
import Image from "next/image";
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";
import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg";

function ExperienceCard({id, company, jobtitle, startYear, endYear, description}) {

    const { theme } = useContext(ThemeContext);


    return (
        /* 2. Removed <Fade bottom> wrapper */
        <div key={id} className={`experience-card`}>
            <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                <Image
                    src={theme.type === 'light' ? expImgBlack : expImgWhite}
                    alt=""
                    width={40}
                    height={40}
                />
            </div>
            <div className="experience-details">
                <h6 style={{color: theme.primary400}}>{startYear===endYear ? startYear : `${startYear} - ${endYear}`}</h6>
                <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                <h5 style={{color: theme.tertiary80}}>{company}</h5>
                <h5 style={{color: theme.tertiary}}>{description}</h5>
            </div>
        </div>
    )
}

export default ExperienceCard;