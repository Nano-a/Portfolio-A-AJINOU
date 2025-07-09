import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import React from 'react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.internship'),
      company: t('experience.internship.company'),
      location: t('experience.location.lyon'),
      period: t('experience.internship.period'),
      description: t('experience.internship.desc'),
      skills: ['Soins d\'urgence', 'Premiers secours', 'Transport médical', 'Coordination'],
      type: t('experience.type.internship')
    },
    {
      title: t('experience.apprenticeship'),
      company: t('experience.apprenticeship.company'),
      location: t('experience.location.paris'),
      period: t('experience.apprenticeship.period'),
      description: t('experience.apprenticeship.desc'),
      skills: ['Gestion de stand', 'Vente', 'Gestion des paiements', 'Inventaire'],
      type: t('experience.type.apprenticeship')
    },
    {
      title: t('experience.freelance'),
      company: t('experience.freelance.company'),
      location: t('experience.location.remote'),
      period: t('experience.freelance.period'),
      description: t('experience.freelance.desc'),
      skills: ['Conseil client', 'Vente électronique', 'Support technique', 'Organisation'],
      type: t('experience.type.freelance')
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - centered */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot - centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background shadow-lg hidden md:block z-10" />

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === t('experience.type.internship')
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : exp.type === t('experience.type.apprenticeship')
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building2 size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
