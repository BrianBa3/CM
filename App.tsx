import React from 'react';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';
import DedicationSection from './components/DedicationSection';
import Footer from './components/Footer';

import BirthdayMessage from './components/BirthdayMessage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50 font-sans selection:bg-brand-200 selection:text-brand-900">
      <HeroSection />

      {/* Container for main content */}
      <div className="relative">
        <BirthdayMessage />
        <Timeline />
        <PhotoGallery />
        <DedicationSection />
      </div>

      <Footer />

      {/* Floating flower decoration */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <div className="bg-white p-3 rounded-full shadow-lg shadow-yellow-500/20 animate-float border border-brand-100 text-yellow-500">
          <span className="text-2xl" role="img" aria-label="flower">🌻</span>
        </div>
      </div>
    </div>
  );
};

export default App;