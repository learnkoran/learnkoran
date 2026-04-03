import React from 'react';
import { Star } from 'lucide-react';
import EditableText from './EditableText';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <div className="text-center mb-10">
        <div className="inline-block p-3 bg-emerald-100 rounded-full text-emerald-600 mb-4">
          <Star size={32} />
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
          <EditableText id="aboutTitle" defaultText="About LearnKoran.de" />
        </h1>
        <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="prose prose-lg prose-emerald mx-auto text-gray-600 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="mb-4">
          <EditableText 
            id="aboutP1" 
            defaultText="Welcome to LearnKoran.de, your comprehensive digital companion for Islamic learning and daily practice." 
            multiline 
            as="p"
          />
        </div>
        <div className="mb-4">
          <EditableText 
            id="aboutP2" 
            defaultText="Our mission is to make the Holy Quran and Islamic knowledge accessible to everyone, regardless of language or location. We strive to provide accurate prayer times, clear translations, and helpful resources for Muslims around the world." 
            multiline 
            as="p"
          />
        </div>
        <div>
          <EditableText 
            id="aboutP3" 
            defaultText="Designed with love and devotion, this platform serves communities from diverse backgrounds, bridging languages to unite us in faith." 
            multiline 
            as="p"
          />
        </div>
      </div>
    </div>
  );
};

export default About;