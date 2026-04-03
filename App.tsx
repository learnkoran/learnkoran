import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PrayerTimes from './components/PrayerTimes';
import QuranReader from './components/QuranReader';
import About from './components/About';
import Contact from './components/Contact';
import Impressum from './components/Impressum';
import { ContentProvider, useContent } from './contexts/ContentContext';
import { Pencil, Check } from 'lucide-react';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const { isEditMode, toggleEditMode, language } = useContent();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setActiveTab} />
            {/* Quick Access Grid */}
            <div className="container mx-auto px-4 py-16">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 font-serif">Services</h2>
               </div>
               {/* This section can be expanded with more EditableText components later */}
            </div>
          </>
        );
      case 'prayerTimes':
        return <PrayerTimes />;
      case 'quran':
        return <QuranReader />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'impressum':
        return <Impressum />;
      default:
        return <Hero onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans text-gray-900 ${language === 'ar' || language === 'ur' || language === 'fa' || language === 'ps' ? 'rtl' : 'ltr'}`}>
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Floating Edit Mode Toggle */}
      <button
        onClick={toggleEditMode}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all z-50 transform hover:scale-105 ${
            isEditMode ? 'bg-emerald-600 text-white ring-4 ring-emerald-200' : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
        title="Toggle Editor Mode"
      >
        {isEditMode ? <Check size={24} /> : <Pencil size={24} />}
      </button>

      {isEditMode && (
          <div className="fixed bottom-6 right-24 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold animate-pulse">
              Editor Active: Click text to edit
          </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;