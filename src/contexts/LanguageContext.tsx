import React, { createContext, ReactNode, useContext, useState } from 'react';

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
    'hero.name': 'Abderrahman AJINOU',
    'hero.title': 'Étudiant en 2e année de Licence Informatique',
    'hero.description': 'Étudiant motivé en 2e année de Licence en Informatique à l\'Université Paris Cité, passionné par le développement logiciel, web, et la robotique. À la recherche d\'un stage en développement informatique pour l\'été 2024.',
    'hero.cta.cv': 'Télécharger CV',
    'hero.cta.contact': 'Me contacter',
    'hero.badge': '🎓 Licence Informatique - Université Paris Cité',
    'hero.discover': 'Découvrir',
    
    // About
    'about.title': 'À propos',
    'about.subtitle': 'Étudiant passionné en 2e année de Licence Informatique à l\'Université Paris Cité, je m\'épanouis dans la création d\'expériences numériques innovantes.',
    'about.description1': 'Actuellement en 2e année de Licence en Informatique à l\'Université Paris Cité, je me passionne pour le développement logiciel, web, et la robotique. Mon parcours m\'a permis d\'acquérir une solide base en programmation Java, Python, et en développement web.',
    'about.description2': 'J\'aime relever des défis techniques et créer des solutions élégantes qui allient fonctionnalité et esthétique. Mon objectif est d\'intégrer un master d\'IA ou de CyberSécurité pour devenir CAIO ou CTO. Toujours curieux d\'apprendre, je reste à l\'affût des dernières tendances en développement.',
    'about.skill.development': 'Développement',
    'about.skill.development.desc': 'Java, Python, C++, JavaScript, HTML/CSS, PHP, SQL',
    'about.skill.design': 'Design',
    'about.skill.design.desc': 'JavaFX, AWT/Swing, Interfaces graphiques, UI/UX',
    'about.skill.performance': 'Performance',
    'about.skill.performance.desc': 'Optimisation, Tests unitaires JUnit, CI/CD',
    'about.skill.collaboration': 'Collaboration',
    'about.skill.collaboration.desc': 'Git, GitLab, GitHub, Agile/Scrum, Travail d\'équipe',
    
    // Mission
    'mission.title': 'Mission & Valeurs',
    'mission.vision.title': 'Vision',
    'mission.vision.text': 'Devenir un expert en développement logiciel et web, spécialisé en IA et CyberSécurité pour créer des solutions technologiques innovantes.',
    'mission.innovation.title': 'Innovation',
    'mission.innovation.text': 'Développer des applications et jeux innovants en utilisant les dernières technologies Java, Python et web.',
    'mission.quality.title': 'Qualité',
    'mission.quality.text': 'Chaque projet est développé avec rigueur, tests unitaires et méthodologies Agile pour garantir la qualité du code.',
    
    // Skills
    'skills.title': 'Compétences',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.internship': 'Ambulancier',
    'experience.internship.company': 'Ambulance Les Nations Unies',
    'experience.internship.period': '2018 - 2020',
    'experience.internship.desc': 'Fourniture de soins d\'urgence et premiers secours aux patients. Transport sécurisé des patients vers les établissements médicaux. Coordination avec le personnel médical et les services d\'urgence sous pression.',
    'experience.apprenticeship': 'Employé de Marché',
    'experience.apprenticeship.company': 'Marché de Paris',
    'experience.apprenticeship.period': 'Juin 2019 - Septembre 2019',
    'experience.apprenticeship.desc': 'Installation et gestion des stands de marché. Vente de produits et gestion des paiements. Maintien de l\'inventaire et réapprovisionnement des produits.',
    'experience.freelance': 'Vendeur en Boutique Électronique',
    'experience.freelance.company': 'Hamza, Salé Al Jadida',
    'experience.freelance.period': '2017 - 2018',
    'experience.freelance.desc': 'Accueil et conseil aux clients sur les produits électroniques (téléphones, ordinateurs). Gestion des ventes et des transactions en caisse. Organisation des rayons et support après-vente pour réparations.',
    'experience.type.internship': 'Soins d\'urgence',
    'experience.type.apprenticeship': 'Vente',
    'experience.type.freelance': 'Conseil client',
    'experience.location.paris': 'Paris, France',
    'experience.location.lyon': 'Rabat, Maroc',
    'experience.location.remote': 'Salé Al Jadida, Maroc',
    
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
    'portfolio.project1.title': 'Pacman',
    'portfolio.project1.short': 'Implémentation du célèbre jeu Pacman avec JavaFX, gestion des collisions et animations fluides.',
    'portfolio.project1.full': 'Projet universitaire développé en Java avec JavaFX. Implémentation complète du jeu Pacman avec déplacement fluide, gestion des collisions, animation des personnages et tests unitaires JUnit. Utilise le modèle MVC et GitLab pour la gestion de version.',
    'portfolio.project2.title': 'Tower Defense',
    'portfolio.project2.short': 'Jeu Tower Defense permettant de placer des tours pour défendre une base contre des vagues d\'ennemis.',
    'portfolio.project2.full': 'Projet universitaire développé en Java avec AWT/Swing. Jeu Tower Defense avec placement stratégique des tours, gestion des vagues d\'ennemis et interface graphique pour les scores. Projet "mapso" réalisé en binôme avec GitHub.',
    'portfolio.project3.title': 'Khet (Chess Laser)',
    'portfolio.project3.short': 'Jeu de stratégie où les joueurs utilisent des pièces avec des miroirs et des lasers.',
    'portfolio.project3.full': 'Projet universitaire développé en Java avec AWT/Swing. Jeu de stratégie Khet avec logique de déplacement et de tir au laser, gestion des interactions entre pièces et réflexion des lasers. Utilise GitLab, JUnit et CI/CD.',
    'portfolio.project4.title': 'Site Web Personnel',
    'portfolio.project4.short': 'Portfolio personnel présentant compétences, projets et parcours avec design responsive.',
    'portfolio.project4.full': 'Portfolio personnel développé avec HTML5, CSS3, JavaScript, Bootstrap, AOS, Isotope et Swiper. Hébergé sur GitHub Pages avec navigation fluide, design responsive, animations AOS, galerie filtrable et carrousel interactif.',
    'portfolio.project5.title': 'Certification Python PCAP',
    'portfolio.project5.short': 'Certification attestant des compétences de base en programmation Python.',
    'portfolio.project5.full': 'Certification PCAP (Certified Associate in Python Programming) obtenue le 06/05/2021 auprès du Python Institute. Couvre les structures de données, fonctions, modules et gestion des exceptions en Python.',
    'portfolio.project6.title': 'Certification Microsoft MTA',
    'portfolio.project6.short': 'Certification validant les compétences fondamentales en développement web.',
    'portfolio.project6.full': 'Certification Microsoft Technology Associate (MTA) - Introduction to Programming using HTML and CSS obtenue le 9 Mars 2021. ID Certificat : C2mH-DWQN. Couvre HTML5, CSS3, responsive design, éléments multimédias, formulaires et accessibilité.',
    'portfolio.project7.title': 'Collaboration Microsoft',
    'portfolio.project7.short': 'Projet collaboratif avec Microsoft pour le développement de solutions innovantes.',
    'portfolio.project7.full': 'Projet de collaboration avec Microsoft pour le développement de solutions technologiques innovantes. Travail en équipe sur des projets de développement web et logiciel avec les meilleures pratiques Microsoft.',
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
    'footer.description': 'Étudiant en 2e année de Licence Informatique à l\'Université Paris Cité, créateur d\'expériences numériques innovantes.',
    'footer.copyright': 'Conçu avec ❤️ par Abderrahman AJINOU - N° Étudiant : 22116322'
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
    'hero.name': 'Abderrahman AJINOU',
    'hero.title': '2nd Year Computer Science Student',
    'hero.description': 'Motivated student in 2nd year of Computer Science License at Université Paris Cité, passionate about software development, web development, and robotics. Looking for a summer 2024 internship in computer development.',
    'hero.cta.cv': 'Download CV',
    'hero.cta.contact': 'Contact Me',
    'hero.badge': '🎓 Computer Science License - Université Paris Cité',
    'hero.discover': 'Discover',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate 2nd year Computer Science student at Université Paris Cité, I thrive in creating innovative digital experiences.',
    'about.description1': 'Currently in 2nd year of Computer Science License at Université Paris Cité, I am passionate about software development, web development, and robotics. My journey has allowed me to acquire a solid foundation in Java, Python programming, and web development.',
    'about.description2': 'I enjoy tackling technical challenges and creating elegant solutions that combine functionality and aesthetics. My goal is to integrate a master\'s degree in AI or Cybersecurity to become a CAIO or CTO. Always curious to learn, I stay on top of the latest development trends.',
    'about.skill.development': 'Development',
    'about.skill.development.desc': 'Java, Python, C++, JavaScript, HTML/CSS, PHP, SQL',
    'about.skill.design': 'Design',
    'about.skill.design.desc': 'JavaFX, AWT/Swing, Graphical interfaces, UI/UX',
    'about.skill.performance': 'Performance',
    'about.skill.performance.desc': 'Optimization, JUnit unit testing, CI/CD',
    'about.skill.collaboration': 'Collaboration',
    'about.skill.collaboration.desc': 'Git, GitLab, GitHub, Agile/Scrum, Teamwork',
    
    // Mission
    'mission.title': 'Mission & Values',
    'mission.vision.title': 'Vision',
    'mission.vision.text': 'Become an expert in software and web development, specialized in AI and Cybersecurity to create innovative technological solutions.',
    'mission.innovation.title': 'Innovation',
    'mission.innovation.text': 'Develop innovative applications and games using the latest Java, Python and web technologies.',
    'mission.quality.title': 'Quality',
    'mission.quality.text': 'Each project is developed with rigor, unit testing and Agile methodologies to ensure code quality.',
    
    // Skills
    'skills.title': 'Skills',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.internship': 'Ambulance Driver',
    'experience.internship.company': 'United Nations Ambulance',
    'experience.internship.period': '2018 - 2020',
    'experience.internship.desc': 'Providing emergency care and first aid to patients. Secure transport of patients to medical facilities. Coordination with medical staff and emergency services under pressure.',
    'experience.apprenticeship': 'Market Employee',
    'experience.apprenticeship.company': 'Paris Market',
    'experience.apprenticeship.period': 'June 2019 - September 2019',
    'experience.apprenticeship.desc': 'Installation and management of market stalls. Product sales and payment management. Inventory maintenance and product restocking.',
    'experience.freelance': 'Electronics Store Salesperson',
    'experience.freelance.company': 'Hamza, Salé Al Jadida',
    'experience.freelance.period': '2017 - 2018',
    'experience.freelance.desc': 'Welcoming and advising customers on electronic products (phones, computers). Sales management and cash transactions. Shelf organization and after-sales support for repairs.',
    'experience.type.internship': 'Emergency care',
    'experience.type.apprenticeship': 'Sales',
    'experience.type.freelance': 'Customer service',
    'experience.location.paris': 'Paris, France',
    'experience.location.lyon': 'Rabat, Morocco',
    'experience.location.remote': 'Salé Al Jadida, Morocco',
    
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
    'portfolio.project1.title': 'Pacman',
    'portfolio.project1.short': 'Implementation of the famous Pacman game with JavaFX, collision management and smooth animations.',
    'portfolio.project1.full': 'University project developed in Java with JavaFX. Complete implementation of the Pacman game with smooth movement, collision management, character animation and JUnit unit tests. Uses MVC model and GitLab for version control.',
    'portfolio.project2.title': 'Tower Defense',
    'portfolio.project2.short': 'Tower Defense game allowing players to place towers to defend a base against enemy waves.',
    'portfolio.project2.full': 'University project developed in Java with AWT/Swing. Tower Defense game with strategic tower placement, enemy wave management and graphical interface for scores. "mapso" project done in pairs with GitHub.',
    'portfolio.project3.title': 'Khet (Chess Laser)',
    'portfolio.project3.short': 'Strategy game where players use pieces with mirrors and lasers.',
    'portfolio.project3.full': 'University project developed in Java with AWT/Swing. Khet strategy game with movement and laser shooting logic, piece interaction management and laser reflection. Uses GitLab, JUnit and CI/CD.',
    'portfolio.project4.title': 'Personal Website',
    'portfolio.project4.short': 'Personal portfolio presenting skills, projects and background with responsive design.',
    'portfolio.project4.full': 'Personal portfolio developed with HTML5, CSS3, JavaScript, Bootstrap, AOS, Isotope and Swiper. Hosted on GitHub Pages with smooth navigation, responsive design, AOS animations, filterable gallery and interactive carousel.',
    'portfolio.project5.title': 'Python PCAP Certification',
    'portfolio.project5.short': 'Certification attesting to basic Python programming skills.',
    'portfolio.project5.full': 'PCAP (Certified Associate in Python Programming) certification obtained on 06/05/2021 from Python Institute. Covers data structures, functions, modules and exception handling in Python.',
    'portfolio.project6.title': 'Microsoft MTA Certification',
    'portfolio.project6.short': 'Certification validating fundamental web development skills.',
    'portfolio.project6.full': 'Microsoft Technology Associate (MTA) - Introduction to Programming using HTML and CSS certification obtained on March 9, 2021. Certificate ID: C2mH-DWQN. Covers HTML5, CSS3, responsive design, multimedia elements, forms and accessibility.',
    'portfolio.project7.title': 'Microsoft Collaboration',
    'portfolio.project7.short': 'Collaborative project with Microsoft for the development of innovative solutions.',
    'portfolio.project7.full': 'Collaboration project with Microsoft for the development of innovative technological solutions. Teamwork on web and software development projects with Microsoft best practices.',
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
    'footer.description': '2nd year Computer Science student at Université Paris Cité, creator of innovative digital experiences.',
    'footer.copyright': 'Designed with ❤️ by Abderrahman AJINOU - Student ID : 22116322'
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
