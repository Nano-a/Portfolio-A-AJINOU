
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Lightbulb, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Mission: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Eye,
      title: t('mission.vision.title'),
      description: t('mission.vision.text'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: t('mission.innovation.title'),
      description: t('mission.innovation.text'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: t('mission.quality.title'),
      description: t('mission.quality.text'),
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t('mission.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} mb-6 flex items-center justify-center mx-auto shadow-lg`}>
                  <value.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>

                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
