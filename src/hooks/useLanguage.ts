import { useState, useCallback } from 'react';

export type Language = 'en' | 'zh';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  }, []);

  return { language, toggleLanguage };
}