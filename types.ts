import React from 'react';

export enum LanguageCode {
  DE = 'de',
  EN = 'en',
  FR = 'fr',
  TR = 'tr',
  AR = 'ar',
  UR = 'ur',
  FA = 'fa', // Persian (Iran)
  UZ = 'uz', // Uzbekistan
  AZ = 'az', // Azerbaijan
  SO = 'so', // Somalia
  BN = 'bn', // Bangladesh
  PS = 'ps', // Afghanistan (Pashto)
  TG = 'tg', // Tajikistan
}

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  countryFlag: string; // Emoji
}

export interface NavItem {
  id: string;
  labelKey: string;
  icon: React.ReactNode;
}

export type ContentKey = 
  | 'prayerTimes' 
  | 'quran' 
  | 'about' 
  | 'contact' 
  | 'impressum'
  | 'home'
  | 'dailyVerse'
  | 'askAi';

export interface TranslationDictionary {
  [key: string]: {
    [key in LanguageCode]?: string;
  };
}