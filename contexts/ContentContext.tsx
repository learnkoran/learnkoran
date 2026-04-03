import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS, LANGUAGES } from '../constants';

interface ContentContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  isEditMode: boolean;
  toggleEditMode: () => void;
  updateTranslation: (key: string, value: string) => void;
  t: (key: string, defaultVal?: string) => string;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.DE);
  const [isEditMode, setIsEditMode] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, Record<string, string>>>({});

  // Load overrides from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('site_content_overrides');
    if (stored) {
      try {
        setOverrides(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored overrides", e);
      }
    }
  }, []);

  // Update direction when language changes
  useEffect(() => {
    const langObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];
    document.documentElement.dir = langObj.dir;
    document.documentElement.lang = langObj.code;
  }, [language]);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const updateTranslation = (key: string, value: string) => {
    setOverrides(prev => {
      const newOverrides = {
        ...prev,
        [key]: {
          ...prev[key],
          [language]: value
        }
      };
      localStorage.setItem('site_content_overrides', JSON.stringify(newOverrides));
      return newOverrides;
    });
  };

  const t = (key: string, defaultVal: string = '') => {
    // 1. Check Overrides
    if (overrides[key]?.[language]) {
      return overrides[key][language];
    }
    // 2. Check Constants
    if (TRANSLATIONS[key]) {
      // @ts-ignore - indexing issue with enums in strict mode, safe here
      return TRANSLATIONS[key][language] || TRANSLATIONS[key][LanguageCode.EN] || defaultVal || key;
    }
    // 3. Return Default or Key
    return defaultVal || key;
  };

  return (
    <ContentContext.Provider value={{ language, setLanguage, isEditMode, toggleEditMode, updateTranslation, t }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};