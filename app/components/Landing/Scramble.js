'use client'
import React, { useState, useEffect } from 'react';

const ScrambleText = ({ text, speed = 40 }) => {
    const [displayText, setDisplayText] = useState('');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+';

    useEffect(() => {
        let frame = 0;
        const totalFrames = text.length; // Length of the animation

        const interval = setInterval(() => {
            const scrambled = text.split('').map((char, index) => {
                // If the character is a space, keep it
                if (char === ' ') return ' ';

                // If the frame has passed this character's "lock" point, show the real char
                if (frame > index - 1) return char;

                // Otherwise, show a random character
                return characters[Math.floor(Math.random() * characters.length)];
            }).join('');

            setDisplayText(scrambled);
            frame++;

            if (frame >= totalFrames) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <div>{displayText}</div>;
};

export default ScrambleText;