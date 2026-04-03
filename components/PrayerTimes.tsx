import React from 'react';
import { MapPin, Sun, Moon, Sunrise, Sunset } from 'lucide-react';
import EditableText from './EditableText';

const PrayerTimes: React.FC = () => {
  // Mock Data for UI demonstration
  const times = [
    { name: 'Fajr', time: '04:32', icon: <Sunrise className="text-emerald-500" /> },
    { name: 'Sunrise', time: '06:15', icon: <Sun className="text-orange-400" /> },
    { name: 'Dhuhr', time: '13:10', icon: <Sun className="text-yellow-500" /> },
    { name: 'Asr', time: '16:45', icon: <Sun className="text-orange-500" /> },
    { name: 'Maghrib', time: '19:58', icon: <Sunset className="text-red-500" /> },
    { name: 'Isha', time: '21:40', icon: <Moon className="text-indigo-500" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500 rounded-full opacity-50 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">
                <EditableText id="prayerTimes" defaultText="Prayer Times" />
              </h2>
              <div className="flex items-center space-x-2 text-emerald-100 bg-emerald-700/50 px-3 py-1 rounded-full w-fit">
                <MapPin size={16} />
                <span className="text-sm">
                  <EditableText id="prayerLocation" defaultText="Berlin, Germany" />
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <div className="text-4xl font-bold font-sans">13:10</div>
              <div className="text-emerald-200 uppercase tracking-widest text-xs">Next Prayer: Dhuhr</div>
            </div>
          </div>
        </div>

        {/* Times Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {times.map((prayer) => (
            <div key={prayer.name} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition bg-gray-50 hover:bg-white group">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition">
                  {prayer.icon}
                </div>
                <span className="font-semibold text-gray-700 text-lg">{prayer.name}</span>
              </div>
              <span className="text-xl font-bold text-emerald-600">{prayer.time}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-4 text-center text-gray-500 text-sm border-t border-gray-100">
          Calculation Method: Muslim World League • Asr: Standard
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;