'use client'

import { useEffect } from 'react';

function ScrollToTop({ currentView }) {
  useEffect(() => {
    // Whenever currentView changes, we scroll to the top of the window
    window.scrollTo(0, 0);
  }, [currentView]); // Dependency array ensures this runs only on view change

  return null;
}

export default ScrollToTop;