
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: Code,
    title: "Développement Web de Base",
    description: "Création de sites web simples avec HTML, CSS, JavaScript, PHP et gestion de bases de données MySQL",
    features: ["Sites responsifs", "Intégration backend", "Interfaces intuitives"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Programmation Java",
    description: "Développement d'applications ou jeux avec Java (JavaFX, AWT, Swing) basé sur les projets universitaires",
    features: ["Interfaces graphiques", "Logique de jeu", "Collaboration équipe"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Support en Gestion de Projet",
    description: "Assistance dans la planification et la coordination de projets avec méthodologies Agile/Scrum",
    features: ["Agile/Scrum", "Coordination équipe", "Suivi des délais"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "Bases de Données",
    description: "Conception et gestion de bases de données MySQL avec requêtes SQL optimisées",
    features: ["MySQL", "Requêtes optimisées", "Intégration web"],
    color: "from-orange-500 to-red-500"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
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
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions digitales complètes pour vos projets technologiques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="h-full p-8 bg-background rounded-2xl border border-border hover:shadow-2xl transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
