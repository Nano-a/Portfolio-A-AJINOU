
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio Alex
          </motion.div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('footer.description')}
          </p>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon className="text-foreground" size={20} />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="pt-6 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alex Portfolio. {t('footer.copyright')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
