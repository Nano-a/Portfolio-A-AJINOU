
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Brain, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Création d'applications web modernes avec React, TypeScript et Node.js",
    features: ["Applications SPA", "APIs REST", "Interfaces responsives"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Développement d'applications mobiles cross-platform avec React Native",
    features: ["iOS & Android", "Interface native", "Performance optimisée"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Sites Web Vitrine",
    description: "Conception de sites web professionnels et portfolios personnalisés",
    features: ["Design moderne", "SEO optimisé", "Multi-plateformes"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Database,
    title: "Bases de Données",
    description: "Conception et optimisation de bases de données relationnelles et NoSQL",
    features: ["MySQL/PostgreSQL", "MongoDB", "Optimisation requêtes"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Développement de solutions IA et machine learning",
    features: ["Chatbots intelligents", "Analyse de données", "Modèles prédictifs"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Audit de sécurité et tests de pénétration pour applications web",
    features: ["Tests de sécurité", "Audit de code", "Recommandations"],
    color: "from-red-500 to-orange-500"
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
