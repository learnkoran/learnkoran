import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Heart } from 'lucide-react';
import EditableText from './EditableText';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-emerald-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-emerald-400 mb-4">
              <EditableText id="footerBrand" defaultText="LearnKoran.de" />
            </h2>
            <div className="text-emerald-200 opacity-80 max-w-xs mx-auto md:mx-0">
              <EditableText id="welcome" defaultText="Welcome to LearnKoran.de" multiline />
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-emerald-100 border-b border-emerald-700 inline-block pb-1">Menu</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-emerald-300 transition-colors">
                  <EditableText id="home" defaultText="Home" />
                </button>
              </li>
              {NAV_ITEMS.map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => setActiveTab(item.id)}
                    className="hover:text-emerald-300 transition-colors"
                  >
                    <EditableText id={item.labelKey} />
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => setActiveTab('impressum')}
                  className="hover:text-emerald-300 transition-colors"
                >
                  <EditableText id="impressum" defaultText="Impressum" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
             <h3 className="text-lg font-bold mb-4 text-emerald-100 border-b border-emerald-700 inline-block pb-1">Connect</h3>
             <p className="text-emerald-200 text-sm mb-2">
               <EditableText id="footerEmail" defaultText="info@learnkoran.de" />
             </p>
             <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer">FB</div>
                <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer">IG</div>
                <div className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer">YT</div>
             </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-6 text-center text-sm text-emerald-400 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
          <span>&copy; {new Date().getFullYear()} <EditableText id="footerCopyright" defaultText="LearnKoran.de. All rights reserved." /></span>
          <span className="hidden md:inline">•</span>
          <button onClick={() => setActiveTab('impressum')} className="hover:text-white underline decoration-emerald-600 underline-offset-2">
            <EditableText id="impressum" defaultText="Impressum" />
          </button>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center">
            Made with <Heart size={12} className="mx-1 text-red-400 fill-current" /> for the Ummah
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;