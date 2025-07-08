import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Alex Martin',
    'hero.title': 'Étudiant en Licence Informatique',
    'hero.description': 'Passionné par le développement web moderne, l\'intelligence artificielle et les nouvelles technologies. Je crée des expériences numériques innovantes qui allient performance et esthétique.',
    'hero.cta.cv': 'Télécharger CV',
    'hero.cta.contact': 'Me contacter',
    'hero.badge': '🎓 Licence Informatique',
    'hero.discover': 'Découvrir',
    
    // About
    'about.title': 'À propos',
    'about.subtitle': 'Étudiant passionné en licence informatique, je m\'épanouis dans la création d\'expériences numériques innovantes.',
    'about.description1': 'Actuellement en licence informatique, je me passionne pour le développement web moderne et les nouvelles technologies. Mon parcours m\'a permis d\'acquérir une solide base en programmation et en conception d\'interfaces utilisateur.',
    'about.description2': 'J\'aime relever des défis techniques et créer des solutions élégantes qui allient fonctionnalité et esthétique. Toujours curieux d\'apprendre, je reste à l\'affût des dernières tendances en développement.',
    'about.skill.development': 'Développement',
    'about.skill.development.desc': 'HTML, CSS, JavaScript, React, Node.js, Python',
    'about.skill.design': 'Design',
    'about.skill.design.desc': 'UI/UX, Figma, Adobe Creative Suite',
    'about.skill.performance': 'Performance',
    'about.skill.performance.desc': 'Optimisation, SEO, Accessibilité',
    'about.skill.collaboration': 'Collaboration',
    'about.skill.collaboration.desc': 'Git, Agile, Travail d\'équipe',
    
    // Mission
    'mission.title': 'Mission & Valeurs',
    'mission.vision.title': 'Vision',
    'mission.vision.text': 'Créer des solutions technologiques qui simplifient la vie et connectent les personnes.',
    'mission.innovation.title': 'Innovation',
    'mission.innovation.text': 'Toujours à l\'avant-garde des dernières technologies pour proposer des solutions modernes.',
    'mission.quality.title': 'Qualité',
    'mission.quality.text': 'Chaque ligne de code est écrite avec passion et attention aux détails.',
    
    // Skills
    'skills.title': 'Compétences',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.internship': 'Stage Développeur Web',
    'experience.internship.company': 'TechCorp Solutions',
    'experience.internship.period': 'Juin 2024 - Août 2024',
    'experience.internship.desc': 'Développement d\'une application web en React avec TypeScript. Collaboration avec l\'équipe de design pour implémenter des interfaces utilisateur modernes et responsives.',
    'experience.apprenticeship': 'Alternance Développeur Full-Stack',
    'experience.apprenticeship.company': 'Digital Innovations',
    'experience.apprenticeship.period': 'Septembre 2023 - Présent',
    'experience.apprenticeship.desc': 'Développement et maintenance d\'applications web. Participation à toutes les phases du cycle de développement, de la conception à la mise en production.',
    'experience.freelance': 'Projet Freelance',
    'experience.freelance.company': 'Client Privé',
    'experience.freelance.period': 'Mars 2023 - Mai 2023',
    'experience.freelance.desc': 'Création d\'un site vitrine pour une petite entreprise locale. Conception responsive et optimisation SEO.',
    'experience.type.internship': 'Stage',
    'experience.type.apprenticeship': 'Alternance',
    'experience.type.freelance': 'Freelance',
    'experience.location.paris': 'Paris, France',
    'experience.location.lyon': 'Lyon, France',
    'experience.location.remote': 'Télétravail',
    
    // Portfolio
    'portfolio.title': 'Projets',
    'portfolio.subtitle': 'Découvrez mes projets récents alliant créativité et innovation technologique',
    'portfolio.filter.all': 'Tout',
    'portfolio.filter.university': 'Universitaire',
    'portfolio.filter.personal': 'Personnel',
    'portfolio.filter.ai': 'IA',
    'portfolio.filter.cybersecurity': 'CyberSécurité',
    'portfolio.filter.collaboration': 'Collaboration',
    'portfolio.filter.certificate': 'Certificat',
    'portfolio.project1.title': 'Système de Gestion d\'Étudiants',
    'portfolio.project1.short': 'Application Java pour gérer les inscriptions et notes des étudiants avec interface graphique Swing.',
    'portfolio.project1.full': 'Système complet de gestion universitaire développé en Java avec interface Swing. Inclut la gestion des étudiants, professeurs, cours, notes et statistiques. Base de données MySQL avec architecture MVC.',
    'portfolio.project2.title': 'Portfolio Personnel React',
    'portfolio.project2.short': 'Site web personnel moderne avec animations 3D et thème sombre/clair.',
    'portfolio.project2.full': 'Portfolio personnel développé avec React et TypeScript, intégrant Three.js pour les animations 3D. Design responsive avec thème adaptatif et optimisations SEO.',
    'portfolio.project3.title': 'Chatbot IA Intelligent',
    'portfolio.project3.short': 'Chatbot utilisant l\'API OpenAI pour répondre aux questions des utilisateurs.',
    'portfolio.project3.full': 'Chatbot intelligent développé avec Python et l\'API OpenAI, capable de comprendre et répondre aux questions des utilisateurs de manière contextuelle.',
    'portfolio.project4.title': 'Scanner de Vulnérabilités Web',
    'portfolio.project4.short': 'Outil de sécurité pour détecter les vulnérabilités communes dans les applications web.',
    'portfolio.project4.full': 'Outil de cybersécurité développé en Python pour scanner et détecter automatiquement les vulnérabilités dans les applications web.',
    'portfolio.project5.title': 'Plateforme Collaborative de Code',
    'portfolio.project5.short': 'Application web permettant aux développeurs de collaborer en temps réel sur des projets.',
    'portfolio.project5.full': 'Plateforme de collaboration en temps réel pour développeurs, permettant l\'édition de code simultanée et la gestion de projets.',
    'portfolio.project6.title': 'Certification AWS Solutions Architect',
    'portfolio.project6.short': 'Projet de certification incluant déploiement d\'infrastructure cloud complète.',
    'portfolio.project6.full': 'Projet de certification AWS comprenant la conception et le déploiement d\'une infrastructure cloud complète avec services managés.',
    'portfolio.project7.title': 'Visualisation 3D de Données',
    'portfolio.project7.short': 'Interface interactive pour visualiser des algorithmes de tri en 3D.',
    'portfolio.project7.full': 'Application de visualisation interactive permettant d\'observer le fonctionnement des algorithmes de tri en trois dimensions.',
    'portfolio.project8.title': 'Détecteur de Fraude par ML',
    'portfolio.project8.short': 'Modèle d\'apprentissage automatique pour détecter les transactions frauduleuses.',
    'portfolio.project8.full': 'Système de détection de fraude utilisant des algorithmes d\'apprentissage automatique pour identifier les transactions suspectes.',
    'portfolio.duration': 'Durée',
    'portfolio.team': 'Équipe',
    'portfolio.challenges': 'Défis relevés',
    'portfolio.demo': 'Demo',
    'portfolio.code': 'Code',
    'portfolio.details': 'Cliquez pour plus de détails',
    
    // Services
    'services.title': 'Services',
    
    // Stats
    'stats.title': 'En Chiffres',
    'stats.code': 'Lignes de code',
    'stats.hours': 'Heures d\'apprentissage',
    'stats.skills': 'Compétences maîtrisées',
    'stats.projects': 'Projets réalisés',
    
    // Testimonials
    'testimonials.title': 'Témoignages',
    
    // Contact
    'contact.title': 'Contact',
    
    // Footer
    'footer.description': 'Étudiant passionné en informatique, créateur d\'expériences numériques innovantes.',
    'footer.copyright': 'Conçu avec ❤️ et React.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Alex Martin',
    'hero.title': 'Computer Science Student',
    'hero.description': 'Passionate about modern web development, artificial intelligence and new technologies. I create innovative digital experiences that combine performance and aesthetics.',
    'hero.cta.cv': 'Download CV',
    'hero.cta.contact': 'Contact Me',
    'hero.badge': '🎓 Computer Science Degree',
    'hero.discover': 'Discover',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate computer science student, I thrive in creating innovative digital experiences.',
    'about.description1': 'Currently studying computer science, I am passionate about modern web development and new technologies. My journey has allowed me to acquire a solid foundation in programming and user interface design.',
    'about.description2': 'I enjoy tackling technical challenges and creating elegant solutions that combine functionality and aesthetics. Always curious to learn, I stay on top of the latest development trends.',
    'about.skill.development': 'Development',
    'about.skill.development.desc': 'HTML, CSS, JavaScript, React, Node.js, Python',
    'about.skill.design': 'Design',
    'about.skill.design.desc': 'UI/UX, Figma, Adobe Creative Suite',
    'about.skill.performance': 'Performance',
    'about.skill.performance.desc': 'Optimization, SEO, Accessibility',
    'about.skill.collaboration': 'Collaboration',
    'about.skill.collaboration.desc': 'Git, Agile, Teamwork',
    
    // Mission
    'mission.title': 'Mission & Values',
    'mission.vision.title': 'Vision',
    'mission.vision.text': 'Create technological solutions that simplify life and connect people.',
    'mission.innovation.title': 'Innovation',
    'mission.innovation.text': 'Always at the forefront of the latest technologies to offer modern solutions.',
    'mission.quality.title': 'Quality',
    'mission.quality.text': 'Every line of code is written with passion and attention to detail.',
    
    // Skills
    'skills.title': 'Skills',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.internship': 'Web Developer Internship',
    'experience.internship.company': 'TechCorp Solutions',
    'experience.internship.period': 'June 2024 - August 2024',
    'experience.internship.desc': 'Development of a web application in React with TypeScript. Collaboration with the design team to implement modern and responsive user interfaces.',
    'experience.apprenticeship': 'Full-Stack Developer Apprenticeship',
    'experience.apprenticeship.company': 'Digital Innovations',
    'experience.apprenticeship.period': 'September 2023 - Present',
    'experience.apprenticeship.desc': 'Development and maintenance of web applications. Participation in all phases of the development cycle, from design to production deployment.',
    'experience.freelance': 'Freelance Project',
    'experience.freelance.company': 'Private Client',
    'experience.freelance.period': 'March 2023 - May 2023',
    'experience.freelance.desc': 'Creation of a showcase website for a local small business. Responsive design and SEO optimization.',
    'experience.type.internship': 'Internship',
    'experience.type.apprenticeship': 'Apprenticeship',
    'experience.type.freelance': 'Freelance',
    'experience.location.paris': 'Paris, France',
    'experience.location.lyon': 'Lyon, France',
    'experience.location.remote': 'Remote',
    
    // Portfolio
    'portfolio.title': 'Projects',
    'portfolio.subtitle': 'Discover my recent projects combining creativity and technological innovation',
    'portfolio.filter.all': 'All',
    'portfolio.filter.university': 'University',
    'portfolio.filter.personal': 'Personal',
    'portfolio.filter.ai': 'AI',
    'portfolio.filter.cybersecurity': 'CyberSecurity',
    'portfolio.filter.collaboration': 'Collaboration',
    'portfolio.filter.certificate': 'Certificate',
    'portfolio.project1.title': 'Student Management System',
    'portfolio.project1.short': 'Java application to manage student registrations and grades with Swing GUI.',
    'portfolio.project1.full': 'Complete university management system developed in Java with Swing interface. Includes management of students, professors, courses, grades and statistics. MySQL database with MVC architecture.',
    'portfolio.project2.title': 'Personal React Portfolio',
    'portfolio.project2.short': 'Modern personal website with 3D animations and dark/light theme.',
    'portfolio.project2.full': 'Personal portfolio developed with React and TypeScript, integrating Three.js for 3D animations. Responsive design with adaptive theme and SEO optimizations.',
    'portfolio.project3.title': 'Intelligent AI Chatbot',
    'portfolio.project3.short': 'Chatbot using OpenAI API to answer user questions.',
    'portfolio.project3.full': 'Intelligent chatbot developed with Python and OpenAI API, capable of understanding and responding to user questions contextually.',
    'portfolio.project4.title': 'Web Vulnerability Scanner',
    'portfolio.project4.short': 'Security tool to detect common vulnerabilities in web applications.',
    'portfolio.project4.full': 'Cybersecurity tool developed in Python to automatically scan and detect vulnerabilities in web applications.',
    'portfolio.project5.title': 'Collaborative Code Platform',
    'portfolio.project5.short': 'Web application allowing developers to collaborate in real-time on projects.',
    'portfolio.project5.full': 'Real-time collaboration platform for developers, enabling simultaneous code editing and project management.',
    'portfolio.project6.title': 'AWS Solutions Architect Certification',
    'portfolio.project6.short': 'Certification project including complete cloud infrastructure deployment.',
    'portfolio.project6.full': 'AWS certification project including the design and deployment of a complete cloud infrastructure with managed services.',
    'portfolio.project7.title': '3D Data Visualization',
    'portfolio.project7.short': 'Interactive interface to visualize sorting algorithms in 3D.',
    'portfolio.project7.full': 'Interactive visualization application allowing to observe the functioning of sorting algorithms in three dimensions.',
    'portfolio.project8.title': 'ML Fraud Detector',
    'portfolio.project8.short': 'Machine learning model to detect fraudulent transactions.',
    'portfolio.project8.full': 'Fraud detection system using machine learning algorithms to identify suspicious transactions.',
    'portfolio.duration': 'Duration',
    'portfolio.team': 'Team',
    'portfolio.challenges': 'Challenges met',
    'portfolio.demo': 'Demo',
    'portfolio.code': 'Code',
    'portfolio.details': 'Click for more details',
    
    // Services
    'services.title': 'Services',
    
    // Stats
    'stats.title': 'By Numbers',
    'stats.code': 'Lines of code',
    'stats.hours': 'Learning hours',
    'stats.skills': 'Skills mastered',
    'stats.projects': 'Projects completed',
    
    // Testimonials
    'testimonials.title': 'Testimonials',
    
    // Contact
    'contact.title': 'Contact',
    
    // Footer
    'footer.description': 'Passionate computer science student, creator of innovative digital experiences.',
    'footer.copyright': 'Designed with ❤️ and React.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
