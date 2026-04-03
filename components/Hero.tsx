import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { getDailyVerse } from '../services/geminiService';
import { TRANSLATIONS } from '../constants';
import { useContent } from '../contexts/ContentContext';
import EditableText from './EditableText';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { language, t } = useContent();
  const [verse, setVerse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVerse = async () => {
      setLoading(true);
      // Use the raw Translation string for the Gemini prompt
      const langName = TRANSLATIONS['dailyVerse'][language] || 'English';
      const data = await getDailyVerse(langName);
      setVerse(data);
      setLoading(false);
    };

    fetchVerse();
  }, [language]);

  return (
    <div className="relative overflow-hidden bg-emerald-900 text-white rounded-b-[3rem] shadow-2xl mx-2 md:mx-4 mt-2">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
           <pattern id="islamic-hero" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
             <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor" />
           </pattern>
           <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-hero)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-gold-400" />
            <span className="text-emerald-100 text-sm font-medium tracking-wide">
              <EditableText id="welcome" defaultText="Welcome to LearnKoran.de" />
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-200">
            <EditableText id="heroTitle" defaultText="Learn, Reflect & Grow in Faith" multiline />
          </h1>

          {/* Daily Verse Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/20 max-w-2xl mx-auto shadow-2xl">
             <h3 className="text-emerald-300 font-bold uppercase tracking-widest text-xs mb-4">
                <EditableText id="dailyVerse" defaultText="Verse of the Day" />
             </h3>
             {loading ? (
                <div className="flex justify-center py-4">
                  <Loader2 className="animate-spin text-white" size={32} />
                </div>
             ) : (
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-white">
                  "{verse || "Indeed, with hardship [will be] ease."}"
                </p>
             )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => onNavigate('quran')}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl shadow-lg shadow-gold-600/30 transition transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <EditableText id="quran" defaultText="The Holy Quran" />
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('prayerTimes')}
              className="px-8 py-4 bg-emerald-800 hover:bg-emerald-700 border border-emerald-600 text-white font-bold rounded-xl transition transform hover:-translate-y-1"
            >
              <EditableText id="prayerTimes" defaultText="Prayer Times" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;