import React, { useContext } from 'react';
// 1. Corrected import for React 19 / MUI v5+ compatibility
import { makeStyles } from '@mui/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';
import Image from 'next/image';

function EducationCard({ id, institution, course, startYear, endYear, finished, mention, options }) {

    const { theme } = useContext(ThemeContext);

    return (
        /* 2. Removed <Fade bottom> wrapper */
        <div key={id} className={`education-card`} >
            <div className="educard-img" style={{backgroundColor: theme.primary}}>
                <Image
                    src={theme.type === 'light' ? eduImgBlack : eduImgWhite}
                    alt={institution}
                    width={40}
                    height={40}
                />
            </div>
            <div className="education-details">
                <h6 style={{color: theme.primary400}}>{startYear}-{endYear}</h6>
                <h4 style={{color: theme.tertiary}}>{course}</h4>
                <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                <h5 style={{ color: theme.tertiary }}>{options}</h5>

                {finished && (

                        <h5 style={{ color: theme.primary }}>Mention {mention}</h5>

                )}

            </div>
        </div>
    );
}

export default EducationCard;