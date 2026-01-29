'use client'

import { Main } from './pages'; // Adjust path as needed
// Keep your utility components
import ScrollToTop from '@/app/utils/ScrollToTop';
import BackToTop from '@/app/components/BackToTop/BackToTop';

function App() {

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