import React from 'react';
import { Book } from 'lucide-react';
import EditableText from './EditableText';

const QuranReader: React.FC = () => {
  // Mock List of Surahs
  const surahs = [
    { number: 1, name: 'Al-Fatiha', english: 'The Opening', ayahs: 7, type: 'Meccan' },
    { number: 2, name: 'Al-Baqarah', english: 'The Cow', ayahs: 286, type: 'Medinan' },
    { number: 3, name: 'Ali Imran', english: 'Family of Imran', ayahs: 200, type: 'Medinan' },
    { number: 4, name: 'An-Nisa', english: 'The Women', ayahs: 176, type: 'Medinan' },
    { number: 5, name: 'Al-Ma\'idah', english: 'The Table Spread', ayahs: 120, type: 'Medinan' },
    { number: 6, name: 'Al-An\'am', english: 'The Cattle', ayahs: 165, type: 'Meccan' },
    { number: 36, name: 'Ya-Sin', english: 'Ya Sin', ayahs: 83, type: 'Meccan' },
    { number: 67, name: 'Al-Mulk', english: 'The Sovereignty', ayahs: 30, type: 'Meccan' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-4">
          <EditableText id="quran" defaultText="The Holy Quran" />
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          <EditableText id="quranSub" defaultText="Read, recite, and reflect upon the words of Allah. Select a Surah to begin reading." multiline />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {surahs.map((surah) => (
          <div key={surah.number} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition cursor-pointer group relative overflow-hidden">
             {/* Decorative Number Background */}
             <div className="absolute -right-4 -bottom-4 text-9xl font-bold text-gray-50 opacity-50 group-hover:text-emerald-50 transition select-none">
               {surah.number}
             </div>

             <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold rounded-full rotate-45 group-hover:rotate-0 transition duration-500">
                    <span className="-rotate-45 group-hover:rotate-0 transition duration-500">{surah.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-emerald-600 transition">{surah.english}</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{surah.type} • {surah.ayahs} Verses</p>
                  </div>
                </div>
             </div>

             <div className="mt-6 text-right">
                <h4 className="text-2xl font-serif text-gray-800">{surah.name}</h4>
             </div>
          </div>
        ))}
        
        {/* Placeholder for more */}
        <div className="flex items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400">
           <span>Load more Surahs...</span>
        </div>
      </div>
    </div>
  );
};

export default QuranReader;