
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="flex items-center space-x-2 px-3 py-2 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300"
        initial={false}
        animate={{
          backgroundColor: language === 'en' ? '#3b82f6' : '#8b5cf6',
        }}
      >
        <Globe className="text-foreground" size={16} />
        <span className="text-sm font-medium text-foreground">
          {language.toUpperCase()}
        </span>
      </motion.button>
    </motion.div>
  );
};
