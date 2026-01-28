"use client";

import "./globals.css";
import { HelmetProvider } from 'react-helmet-async';
import ThemeContextProvider from './contexts/ThemeContext';
import {Variables} from '@/app/assets/css/variables'

import { Poppins, JetBrains_Mono } from 'next/font/google';
import Background from "@/app/components/Background/background";
import "./App.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'], // Choose only the weights you need to stay "dynamic" and fast
    variable: '--font-poppins',    // This creates a CSS variable
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '600', '700'], // Choose only the weights you need to stay "dynamic" and fast
    variable: '--font-jetbrains',    // This creates a CSS variable
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${poppins.variable} ${jetbrains.variable}`}>
        <body style={Variables}>
        <HelmetProvider>
            <ThemeContextProvider>
                <Background children={children} className="app"/>
            </ThemeContextProvider>
        </HelmetProvider>
        </body>
        </html>
    );
}