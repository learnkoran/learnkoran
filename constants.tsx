import { Language, LanguageCode, TranslationDictionary } from './types';
import { BookOpen, Clock, Info, Phone, Home, FileText } from 'lucide-react';
import React from 'react';

export const LANGUAGES: Language[] = [
  { code: LanguageCode.DE, name: 'Deutsch', nativeName: 'Deutsch', dir: 'ltr', countryFlag: '🇩🇪' },
  { code: LanguageCode.EN, name: 'English', nativeName: 'English', dir: 'ltr', countryFlag: '🇬🇧' },
  { code: LanguageCode.FR, name: 'Français', nativeName: 'Français', dir: 'ltr', countryFlag: '🇫🇷' }, // Mali, Niger, Senegal
  { code: LanguageCode.TR, name: 'Türkçe', nativeName: 'Türkçe', dir: 'ltr', countryFlag: '🇹🇷' },
  { code: LanguageCode.AR, name: 'Arabic', nativeName: 'العربية', dir: 'rtl', countryFlag: '🇸🇦' }, // Egypt, Algeria, Morocco, Saudi, Iraq, Sudan, Yemen, Syria, Jordan
  { code: LanguageCode.UR, name: 'Urdu', nativeName: 'اردو', dir: 'rtl', countryFlag: '🇵🇰' },
  { code: LanguageCode.BN, name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr', countryFlag: '🇧🇩' }, // Bangladesh
  { code: LanguageCode.FA, name: 'Persian', nativeName: 'فارسی', dir: 'rtl', countryFlag: '🇮🇷' }, // Iran
  { code: LanguageCode.PS, name: 'Pashto', nativeName: 'پښتو', dir: 'rtl', countryFlag: '🇦🇫' }, // Afghanistan
  { code: LanguageCode.UZ, name: 'Uzbek', nativeName: 'Oʻzbek', dir: 'ltr', countryFlag: '🇺🇿' },
  { code: LanguageCode.AZ, name: 'Azerbaijani', nativeName: 'Azərbaycan', dir: 'ltr', countryFlag: '🇦🇿' },
  { code: LanguageCode.SO, name: 'Somali', nativeName: 'Soomaaliga', dir: 'ltr', countryFlag: '🇸🇴' },
  { code: LanguageCode.TG, name: 'Tajik', nativeName: 'Тоҷикӣ', dir: 'ltr', countryFlag: '🇹🇯' },
];

export const TRANSLATIONS: TranslationDictionary = {
  home: {
    de: 'Startseite', en: 'Home', fr: 'Accueil', tr: 'Anasayfa', ar: 'الرئيسية', ur: 'گھر', fa: 'خانه', bn: 'হোম', ps: 'کور', uz: 'Bosh sahifa', az: 'Ana səhifə', so: 'Hoy', tg: 'Асосӣ',
  },
  prayerTimes: {
    de: 'Gebetzeiten', en: 'Prayer Times', fr: 'Horaires de Prière', tr: 'Namaz Vakitleri', ar: 'مواقيت الصلاة', ur: 'نماز کے اوقات', fa: 'اوقات شرعی', bn: 'নামাজের সময়', ps: 'د لمانځه وختونه', uz: 'Namoz vaqtlari', az: 'Namaz vaxtları', so: 'Waqtiyada Salaadda', tg: 'Вақтҳои намоз',
  },
  quran: {
    de: 'Der Heilige Koran', en: 'The Holy Quran', fr: 'Le Saint Coran', tr: 'Kuran-ı Kerim', ar: 'القرآن الكريم', ur: 'قرآن پاک', fa: 'قرآن کریم', bn: 'পবিত্র কুরআন', ps: 'قرآن کریم', uz: 'Muqaddas Qur\'on', az: 'Qurani-Kərim', so: 'Quraanka Kariimka ah', tg: 'Қуръони Карим',
  },
  about: {
    de: 'Über uns', en: 'About Us', fr: 'À propos', tr: 'Hakkımızda', ar: 'من نحن', ur: 'ہمارے بارے میں', fa: 'درباره ما', bn: 'আমাদের সম্পর্কে', ps: 'زموږ په اړه', uz: 'Biz haqimizda', az: 'Haqqımızda', so: 'Nagugu saabsan', tg: 'Дар бораи мо',
  },
  contact: {
    de: 'Kontakt', en: 'Contact', fr: 'Contact', tr: 'İletişim', ar: 'اتصل بنا', ur: 'رابطہ', fa: 'تماس', bn: 'যোগাযোগ', ps: 'اړیکه', uz: 'Aloqa', az: 'Əlaqə', so: 'Xiriir', tg: 'Тамос',
  },
  impressum: {
    de: 'Impressum', en: 'Imprint', fr: 'Mentions légales', tr: 'Künye', ar: 'بيانات قانونية', ur: 'امپرنٹ', fa: 'شناسنامه', bn: 'ইমপ্রিন্ট', ps: 'خپرندوی', uz: 'Nashr ma\'lumotlari', az: 'Hüquqi məlumat', so: 'Daabacaad', tg: 'Импринт',
  },
  welcome: {
    de: 'Willkommen bei LearnKoran.de', en: 'Welcome to LearnKoran.de', fr: 'Bienvenue sur LearnKoran.de', tr: 'LearnKoran.de\'ye Hoşgeldiniz', ar: 'مرحباً بكم في LearnKoran.de', fa: 'به LearnKoran.de خوش آمدید',
  },
  dailyVerse: {
    de: 'Vers des Tages', en: 'Verse of the Day', fr: 'Verset du Jour', tr: 'Günün Ayeti', ar: 'آية اليوم', fa: 'آیه روز',
  },
};

export const NAV_ITEMS = [
  { id: 'prayerTimes', labelKey: 'prayerTimes', icon: <Clock className="w-5 h-5" /> },
  { id: 'quran', labelKey: 'quran', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'about', labelKey: 'about', icon: <Info className="w-5 h-5" /> },
  { id: 'contact', labelKey: 'contact', icon: <Phone className="w-5 h-5" /> },
];