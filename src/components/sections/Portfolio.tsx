import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github, Target, Users } from 'lucide-react';
import React, { useState } from 'react';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = React.useState("Tout");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const projects = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      shortDescription: t('portfolio.project1.short'),
      fullDescription: t('portfolio.project1.full'),
      image: "./images/projects/pacman.png",
      tech: ["Java", "JavaFX", "Gradle", "MVC", "Git", "GitLab", "JUnit"],
      category: "Universitaire",
      type: "2D",
      duration: "4-5 mois",
      team: "5 étudiants",
      challenges: ["Architecture MVC", "Gestion des collisions", "Tests unitaires"],
      results: ["Déplacement fluide", "Animations fluides", "0 bugs critiques"],
      demoUrl: "https://github.com/Nano-a/Pacman",
      githubUrl: "https://github.com/Nano-a/Pacman"
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      shortDescription: t('portfolio.project2.short'),
      fullDescription: t('portfolio.project2.full'),
      image: "./images/projects/tower-defense.png",
      tech: ["Java", "AWT", "Swing", "MVC", "Git", "GitHub"],
      category: "Universitaire",
      type: "2D",
      duration: "3-4 mois",
      team: "2 étudiants",
      challenges: ["Placement stratégique", "Gestion des vagues", "Interface graphique"],
      results: ["Jeu fonctionnel", "Interface intuitive", "Projet 'mapso'"],
      demoUrl: "https://github.com/Nano-a/TowerDefense",
      githubUrl: "https://github.com/Nano-a/TowerDefense"
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      shortDescription: t('portfolio.project3.short'),
      fullDescription: t('portfolio.project3.full'),
      image: "./images/projects/khet.png",
      tech: ["Java", "AWT", "Swing", "GitLab", "JUnit", "CI/CD", "MVC"],
      category: "Universitaire",
      type: "2D",
      duration: "4-5 mois",
      team: "5 étudiants",
      challenges: ["Logique de tir laser", "Gestion des interactions", "CI/CD"],
      results: ["Jeu de stratégie complet", "Tests automatisés", "Déploiement continu"],
      demoUrl: "https://github.com/Nano-a/Khet-Chess-Laser",
      githubUrl: "https://github.com/Nano-a/Khet-Chess-Laser"
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      shortDescription: t('portfolio.project4.short'),
      fullDescription: t('portfolio.project4.full'),
      image: "./images/projects/website.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS", "Isotope", "Swiper"],
      category: "Personnel",
      type: "2D",
      duration: "1 mois",
      team: "Solo",
      challenges: ["Design responsive", "Animations AOS", "Galerie filtrable"],
      results: ["Site en ligne", "Navigation fluide", "Carrousel interactif"],
      demoUrl: "https://nano-a.github.io/portfolio-nano-a/",
      githubUrl: "https://github.com/Nano-a/portfolio-nano-a"
    },
    {
      id: 5,
      title: t('portfolio.project5.title'),
      shortDescription: t('portfolio.project5.short'),
      fullDescription: t('portfolio.project5.full'),
      image: "./images/projects/python-cert.png",
      tech: ["Python", "Structures de données", "Fonctions", "Modules", "Exceptions"],
      category: "Certificat",
      type: "2D",
      duration: "3 mois",
      team: "Solo",
      challenges: ["Apprentissage Python", "Structures complexes", "Gestion d'exceptions"],
      results: ["Certification PCAP", "Compétences validées", "06/05/2021"],
      demoUrl: "https://pythoninstitute.org/",
      githubUrl: "https://pythoninstitute.org/"
    },
    {
      id: 6,
      title: t('portfolio.project6.title'),
      shortDescription: t('portfolio.project6.short'),
      fullDescription: t('portfolio.project6.full'),
      image: "./images/projects/microsoft-cert.png",
      tech: ["HTML5", "CSS3", "Responsive Design", "Multimédia", "Formulaires", "Accessibilité"],
      category: "Certificat",
      type: "2D",
      duration: "2 mois",
      team: "Solo",
      challenges: ["Développement web", "Design responsive", "Accessibilité"],
      results: ["Certification MTA", "ID: C2mH-DWQN", "09/03/2021"],
      demoUrl: "https://www.microsoft.com/",
      githubUrl: "https://www.microsoft.com/"
    },
    {
      id: 7,
      title: t('portfolio.project7.title'),
      shortDescription: t('portfolio.project7.short'),
      fullDescription: t('portfolio.project7.full'),
      image: "./images/projects/microsoft-cert.png",
      tech: ["Collaboration", "Développement web", "Développement logiciel", "Meilleures pratiques"],
      category: "Collaboration",
      type: "2D",
      duration: "6 mois",
      team: "Équipe Microsoft",
      challenges: ["Travail en équipe", "Projets complexes", "Standards Microsoft"],
      results: ["Collaboration réussie", "Solutions innovantes", "Expérience professionnelle"],
      demoUrl: "https://www.microsoft.com/",
      githubUrl: "https://www.microsoft.com/"
    },
    {
      id: 8,
      title: t('portfolio.project8.title'),
      shortDescription: t('portfolio.project8.short'),
      fullDescription: t('portfolio.project8.full'),
      image: "./images/projects/movie-recommender.png",
      tech: ["Python", "Flask", "scikit-learn", "pandas", "numpy", "matplotlib", "SVD", "Machine Learning"],
      category: "IA",
      type: "Web",
      duration: "2-3 mois",
      team: "Solo",
      challenges: ["Filtrage collaboratif", "Prétraitement des données", "Évaluation RMSE"],
      results: ["Système de recommandation fonctionnel", "Interface web interactive", "Visualisations des données"],
      demoUrl: "https://github.com/Nano-a/movie-recommender",
      githubUrl: "https://github.com/Nano-a/movie-recommender"
    },
    {
      id: 9,
      title: t('portfolio.project9.title'),
      shortDescription: t('portfolio.project9.short'),
      fullDescription: t('portfolio.project9.full'),
      image: "./images/projects/medicinal-plant-classifier.png",
      tech: ["Python", "Flask", "scikit-learn", "pandas", "matplotlib", "seaborn", "RandomForest", "Machine Learning"],
      category: "IA",
      type: "Web",
      duration: "2-3 mois",
      team: "Solo",
      challenges: ["Classification binaire", "Prétraitement des données", "Évaluation multi-métriques"],
      results: ["Classificateur fonctionnel", "Interface web interactive", "Visualisations explicatives"],
      demoUrl: "https://github.com/Nano-a/medicinal-plant-classifier",
      githubUrl: "https://github.com/Nano-a/medicinal-plant-classifier"
    },
    {
      id: 10,
      title: t('portfolio.project10.title'),
      shortDescription: t('portfolio.project10.short'),
      fullDescription: t('portfolio.project10.full'),
      image: "./images/projects/traffic-flow-predictor.png",
      tech: ["Python", "Flask", "scikit-learn", "pandas", "matplotlib", "seaborn", "RandomForest", "Machine Learning"],
      category: "IA",
      type: "Web",
      duration: "2-3 mois",
      team: "Solo",
      challenges: ["Génération de données synthétiques", "Classification multi-classes", "Interface utilisateur"],
      results: ["Prédicteur de trafic fonctionnel", "Interface web interactive", "Statistiques en temps réel"],
      demoUrl: "https://github.com/Nano-a/traffic-flow-predictor",
      githubUrl: "https://github.com/Nano-a/traffic-flow-predictor"
    },
    {
      id: 11,
      title: t('portfolio.project11.title'),
      shortDescription: t('portfolio.project11.short'),
      fullDescription: t('portfolio.project11.full'),
      image: "./images/projects/energy-demand-prediction.png",
      tech: ["Python", "Streamlit", "scikit-learn", "pandas", "numpy", "matplotlib", "seaborn", "LightGBM", "XGBoost", "TensorFlow", "LSTM", "Machine Learning", "Deep Learning"],
      category: "IA",
      type: "Web",
      duration: "3-4 mois",
      team: "Solo",
      challenges: ["Feature engineering temporel", "Optimisation d'hyperparamètres", "Interface web complète"],
      results: ["Système de prédiction avancé", "Interface Streamlit interactive", "Comparaison multi-modèles"],
      demoUrl: "https://github.com/Nano-a/energy-demand-prediction",
      githubUrl: "https://github.com/Nano-a/energy-demand-prediction"
    }
  ];

  const categories = [
    t('portfolio.filter.all'),
    t('portfolio.filter.university'),
    t('portfolio.filter.personal'),
    t('portfolio.filter.ai'),
    t('portfolio.filter.cybersecurity'),
    t('portfolio.filter.collaboration'),
    t('portfolio.filter.certificate')
  ];

  const toggleCard = (projectId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === t('portfolio.filter.all') || 
      (selectedCategory === t('portfolio.filter.university') && project.category === "Universitaire") ||
      (selectedCategory === t('portfolio.filter.personal') && project.category === "Personnel") ||
      (selectedCategory === t('portfolio.filter.ai') && project.category === "IA") ||
      (selectedCategory === t('portfolio.filter.cybersecurity') && project.category === "CyberSecurite") ||
      (selectedCategory === t('portfolio.filter.collaboration') && project.category === "Collaboration") ||
      (selectedCategory === t('portfolio.filter.certificate') && project.category === "Certificat");
    return categoryMatch;
  });

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
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
              {t('portfolio.title')}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-background text-foreground border border-border hover:border-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-96"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedCards.has(project.id) ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={() => toggleCard(project.id)}
              >
                {/* Face avant */}
                <div 
                  className="absolute inset-0 bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech && project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech && project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-center pt-2">
                      <p className="text-xs text-muted-foreground">{t('portfolio.details')}</p>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div 
                  className="absolute inset-0 bg-background rounded-2xl overflow-hidden shadow-lg p-6 space-y-4"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="space-y-4 h-full flex flex-col">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.fullDescription}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-primary" />
                        <span className="text-muted-foreground">{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={12} className="text-primary" />
                        <span className="text-muted-foreground">{project.team}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Target size={12} className="text-primary" />
                        <span className="text-xs font-medium text-foreground">{t('portfolio.challenges')}:</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {project.challenges && project.challenges.slice(0, 2).join(" • ")}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <motion.a
                        href={project.demoUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium text-xs hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                        {t('portfolio.demo')}
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-border text-foreground rounded-lg font-medium text-xs hover:bg-muted transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={12} />
                        {t('portfolio.code')}
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
