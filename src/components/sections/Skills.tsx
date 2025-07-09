
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import React from 'react';

const skillCategories = [
  {
    title: "Langages de Programmation",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "C", level: 65 },
      { name: "HTML/CSS", level: 88 },
      { name: "PHP", level: 72 },
      { name: "SQL", level: 80 },
      { name: "OCaml", level: 60 }
    ]
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      { name: "JavaFX", level: 85 },
      { name: "AWT/Swing", level: 80 },
      { name: "Bootstrap", level: 75 },
      { name: "Gradle", level: 70 },
      { name: "JUnit", level: 75 },
      { name: "Git/GitHub/GitLab", level: 80 }
    ]
  },
  {
    title: "Outils & Méthodologies",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "GitLab", level: 80 },
      { name: "Agile/Scrum", level: 75 },
      { name: "MVC", level: 80 },
      { name: "CI/CD", level: 70 },
      { name: "Tests unitaires", level: 75 }
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mes{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise technique développée au cours de ma formation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <Progress value={skill.level} className="h-3" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
