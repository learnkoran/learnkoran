import React, { useState } from 'react';
import { Menu, X, Home, FileText } from 'lucide-react';
import { LANGUAGES, NAV_ITEMS } from '../constants';
import { LanguageCode } from '../types';
import { useContent } from '../contexts/ContentContext';
import EditableText from './EditableText';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContent();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  const currentLangObj = LANGUAGES.find(l => l.code === language);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-emerald-600">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LEFT: Hamburger Menu & Navigation Trigger */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleMenu}
            className="p-2 text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors focus:outline-none flex items-center gap-2"
            aria-label="Menu"
          >
            <Menu size={32} />
          </button>
          
          {/* Language Selector Indicator (Desktop quick view) */}
          <div className="hidden lg:flex items-center text-sm font-medium text-gray-600 bg-emerald-50 px-3 py-1 rounded-full cursor-pointer" onClick={() => setIsMenuOpen(true)}>
             <span className="text-lg mr-2">{currentLangObj?.countryFlag}</span>
             <span>{currentLangObj?.nativeName}</span>
          </div>
        </div>

        {/* RIGHT: Logo */}
        <div className="flex items-center">
          <button onClick={() => setActiveTab('home')} className="flex items-center group">
            <span className="text-2xl md:text-3xl font-serif font-bold text-emerald-600 group-hover:text-emerald-700 transition tracking-tight">
              <EditableText id="brandName" defaultText="LearnKoran.de" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile/Sidebar Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50 z-50">
           <div className="absolute top-0 left-0 h-full w-80 bg-white shadow-2xl animate-in slide-in-from-left duration-300 overflow-y-auto">
             
             {/* Menu Header */}
             <div className="p-4 flex justify-between items-center border-b border-gray-100 bg-emerald-600 text-white">
                <span className="font-serif font-bold text-xl">Menu</span>
                <button onClick={toggleMenu} className="hover:bg-emerald-700 p-1 rounded"><X size={24}/></button>
             </div>
             
             {/* Navigation Links */}
             <nav className="p-4 space-y-2">
               <button 
                  onClick={() => handleNavClick('home')}
                  className={`w-full flex items-center space-x-4 p-3 rounded-xl transition ${activeTab === 'home' ? 'bg-emerald-100 text-emerald-800 font-bold' : 'hover:bg-gray-50 text-gray-700'}`}
               >
                  <span className="p-2 bg-white rounded-full shadow-sm text-emerald-600"><Home size={20} /></span>
                  <EditableText id="home" defaultText="Home" />
               </button>

               {NAV_ITEMS.map((item) => (
                 <button 
                   key={item.id}
                   onClick={() => handleNavClick(item.id)}
                   className={`w-full flex items-center space-x-4 p-3 rounded-xl transition ${activeTab === item.id ? 'bg-emerald-100 text-emerald-800 font-bold' : 'hover:bg-gray-50 text-gray-700'}`}
                 >
                   <span className="p-2 bg-white rounded-full shadow-sm text-emerald-600">{item.icon}</span>
                   <EditableText id={item.labelKey} />
                 </button>
               ))}
               
               {/* Impressum Link in Menu */}
               <button 
                  onClick={() => handleNavClick('impressum')}
                  className={`w-full flex items-center space-x-4 p-3 rounded-xl transition ${activeTab === 'impressum' ? 'bg-emerald-100 text-emerald-800 font-bold' : 'hover:bg-gray-50 text-gray-700'}`}
               >
                  <span className="p-2 bg-white rounded-full shadow-sm text-emerald-600"><FileText size={20} /></span>
                  <EditableText id="impressum" defaultText="Impressum" />
               </button>
             </nav>

             <div className="border-t border-gray-100 my-2 mx-4"></div>

             {/* Language Selection inside Menu */}
             <div className="p-4">
               <p className="px-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                 <EditableText id="selectLang" defaultText="Select Language" />
               </p>
               <div className="grid grid-cols-2 gap-2">
                 {LANGUAGES.map((lang) => (
                   <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                      }}
                      className={`p-2 rounded-lg text-sm border flex items-center justify-start space-x-2 transition ${language === lang.code ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white border-gray-200 text-gray-700 hover:bg-emerald-50'}`}
                   >
                     <span className="text-lg">{lang.countryFlag}</span>
                     <span className="truncate font-medium">{lang.nativeName}</span>
                   </button>
                 ))}
               </div>
             </div>
           </div>
           
           {/* Click outside to close */}
           <div className="absolute top-0 left-80 right-0 h-full" onClick={toggleMenu}></div>
        </div>
      )}
    </header>
  );
};

export default Header;