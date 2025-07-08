
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        backgroundColor: theme === 'dark' ? '#1f2937' : '#f8fafc',
      }}
    >
      <motion.div
        className="w-5 h-5 flex items-center justify-center"
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 360 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <Moon className="text-yellow-400" size={20} />
        ) : (
          <Sun className="text-orange-500" size={20} />
        )}
      </motion.div>
    </motion.button>
  );
};
