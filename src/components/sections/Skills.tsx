
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: "Langages de Programmation",
    skills: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Frameworks & Bibliothèques",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Django", level: 70 },
      { name: "Three.js", level: 65 }
    ]
  },
  {
    title: "Outils & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "Figma", level: 80 }
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
