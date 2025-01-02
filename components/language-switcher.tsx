'use client';

import { TranslateIcon } from './icons/translate-icon';
import { useLanguage } from '@/lib/language-context';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
      aria-label={`Change language to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <TranslateIcon />
      <span className="sr-only">{language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSwitcher; 