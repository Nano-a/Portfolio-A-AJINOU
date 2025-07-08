
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      title: t('about.skill.development'),
      description: t('about.skill.development.desc'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: t('about.skill.design'),
      description: t('about.skill.design.desc'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: t('about.skill.performance'),
      description: t('about.skill.performance.desc'),
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: t('about.skill.collaboration'),
      description: t('about.skill.collaboration.desc'),
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="p-4 bg-muted/30 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
