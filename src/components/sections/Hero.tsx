import { Scene3D } from '@/components/3d/Scene3D';
import ShinyText from '@/components/ui/ShinyText';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // Chemin correct pour GitHub Pages et local
    const cvPath = `${import.meta.env.BASE_URL}CV Abderrahman AJINOU.pdf`;
    window.open(cvPath, '_blank');
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV_Abderrahman_AJINOU.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Arrière-plan 3D */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">{t('hero.greeting')}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {t('hero.name')}
                </span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                <span className="text-primary font-semibold">{t('hero.title')}</span>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={handleDownloadCV}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="group-hover:animate-bounce" size={20} />
                <ShinyText text={t('hero.cta.cv')} speed={3} className="text-white" />
              </motion.button>
              
              <motion.a
                href="#contact"
                className="flex items-center gap-3 px-8 py-4 border-2 border-border text-foreground rounded-2xl font-semibold text-lg hover:bg-muted transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <ShinyText text={t('hero.cta.contact')} speed={3} className="text-foreground" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/Nano-a', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/abderrahman-ajinou/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abderrahman.ajinou@etu.u-paris.fr', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait professionnel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Cercles décoratifs animés */}
              <motion.div
                className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0] 
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Portrait principal */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src="./images/profile/abderrahman-profile.jpeg"
                    alt="Abderrahman AJINOU - Portrait professionnel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Badge flottant */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-background border border-border rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ y: -5 }}
              >
                <p className="text-sm font-semibold text-foreground">
                  {t('hero.badge')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Flèche de scroll animée */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">{t('hero.discover')}</span>
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};
