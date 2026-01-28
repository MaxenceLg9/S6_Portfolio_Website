'use client'

import React, { useState, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext'; // Adjust path as needed
import { Main, ProjectPage } from './pages'; // Adjust path as needed
// Keep your utility components
import ScrollToTop from '@/app/utils/ScrollToTop';
import BackToTop from '@/app/components/BackToTop/BackToTop';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
      <div className="">
        <ScrollToTop currentView="" />

        {/* 3. Render the component based on state */}
        <Main/>

        <BackToTop />
      </div>
  );
}

export default App;