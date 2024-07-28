// context/LanguageContext.tsx
"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextProps {
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLocale }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(initialLocale);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
