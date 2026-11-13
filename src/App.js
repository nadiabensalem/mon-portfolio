import React from 'react';
import { Mail, Phone, Linkedin, Github, Code, Database, Globe, Book, Camera, Heart, Star, Award, GraduationCap, Briefcase } from 'lucide-react';

export default function App() {
  const competences = {
    frontend: ['Angular', 'TypeScript', 'React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
    backend: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'API REST', 'Swagger', 'Node.js', 'PHP', 'Python', 'C'],
    databases: ['MySQL', 'MongoDB', 'Oracle', 'SQL', 'UML'],
    tools: ['Microsoft Azure', 'Firebase', 'Git / GitHub', 'Jira', 'Agile (Scrum)', 'Intégration de LLM (API Groq)']
  };

  const projetPhare = {
    titre: 'EduCenter — Plateforme web de gestion universitaire',
    contexte: "Projet de fin d'études · Stage chez BeeDigital, Monastir · Février – Juin 2026",
    points: [
      'Plateforme multi-rôles avec 5 tableaux de bord dédiés : Super Admin, Admin, Enseignant, Étudiant et Parent.',
      "Gestion des emplois du temps, des absences et des notes, avec contrôle d'accès par rôle (RBAC).",
      'Authentification sécurisée par JWT et Spring Security ; API REST testée et documentée avec Swagger.',
      "Assistant IA d'orientation universitaire basé sur LLaMA 3.3 70B via l'API Groq.",
      'Architecture 3-tiers (Angular / Spring Boot / MySQL), développement en 2 sprints Scrum.'
    ],
    technologies: ['Angular 18', 'TypeScript', 'SCSS', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Swagger', 'API Groq (LLaMA)'],
    methodologie: 'Agile (Scrum)'
  };

  const experiences = [
    {
      poste: 'Stagiaire Développeuse Full-Stack (PFE)',
      entreprise: 'BeeDigital',
      lieu: 'Monastir, Tunisie',
      periode: 'Févr. 2026 – Juin 2026',
      description: 'Conception et développement de la plateforme EduCenter (Angular, Spring Boot, MySQL) en équipe Scrum.'
    },
    {
      poste: 'Responsable administration et opérations',
      entreprise: 'Sirius Call Center',
      lieu: 'Tunis, Tunisie',
      periode: 'Juil. 2021 – Août 2022',
      description: 'Recrutement et gestion RH, suivi des salaires, gestion et fidélisation de comptes clients, enquêtes de satisfaction.'
    },
    {
      poste: "Enseignante d'éducation physique et sportive",
      entreprise: 'Écoles Al Ahd Jadid et Abou Tayeb Al Moutanabbi',
      lieu: 'Tunis, Tunisie',
      periode: 'Sept. 2017 – Juin 2021',
      description: 'Préparation et animation de cours, gestion de groupes, suivi et évaluation des élèves.'
    },
    {
      poste: 'Conseillère clientèle',
      entreprise: 'Neapolis',
      lieu: 'Tunis, Tunisie',
      periode: 'Juin 2017 – Sept. 2017',
      description: 'Analyse des besoins clients, proposition de solutions adaptées et présentation des nouveaux produits.'
    }
  ];

  const projets = [
    {
      titre: 'Plateforme E-commerce "Beauty Products"',
      description: 'Plateforme Web interactive avec authentification sécurisée, gestion du panier et processus de commande.',
      technologies: ['HTML/CSS', 'JavaScript'],
      methodologie: 'Agile (Scrum)'
    },
    {
      titre: 'Mini-projet IA : santé mentale au travail',
      description: "Nettoyage d'un dataset Kaggle puis analyse comparative par genre via Text Mining.",
      technologies: ['Python', 'Pandas', 'NLP'],
      methodologie: 'Data Science'
    },
    {
      titre: 'Application de Gestion d\'Emploi du Temps',
      description: 'Application de bureau complète avec module CRUD et planification dynamique.',
      technologies: ['Java', 'JavaFX', 'MySQL'],
      methodologie: 'POO'
    },
    {
      titre: 'Système de Vente de Voitures',
      description: 'Outil de gestion simulant les processus d\'une concession automobile.',
      technologies: ['Python'],
      methodologie: 'Console'
    },
    {
      titre: 'Logiciel de Gestion de Cotisations Sociales',
      description: 'Programme modulaire pour calculer les cotisations sociales et gérer les fiches d\'employés.',
      technologies: ['C'],
      methodologie: 'Bas niveau'
    }
  ];

  const formations = [
    {
      diplome: 'Licence en Génie Logiciel et Systèmes d\'Information',
      periode: 'Septembre 2023 - Juin 2026',
      etablissement: 'Iteam UNIVERSITY',
      lieu: 'Tunis, Tunisie'
    },
    {
      diplome: 'Licence en Éducation Physique et Sportive (EPS)',
      periode: 'Septembre 2015 - Juin 2018',
      etablissement: 'Issep Ksar Said',
      lieu: 'Manouba, Tunisie'
    },
    {
      diplome: 'Baccalauréat',
      periode: 'Juin 2015',
      etablissement: 'Lycée 9 Avril',
      lieu: 'Tunis, Tunisie'
    }
  ];

  const certifications = [
    {
      titre: 'Microsoft Certified: Azure Fundamentals',
      code: 'AZ-900',
      date: 'Octobre 2025',
      organisme: 'Microsoft',
      lien: 'https://learn.microsoft.com/api/credentials/share/fr-fr/nediabensalem-8777/585AE60C4E626571?sharingId=4751EDFCD74E799A',
      description: 'Maîtrise des concepts fondamentaux du Cloud Computing, des services Azure (Compute, Networking, Storage), et de la sécurité.'
    }
  ];

  const interets = [
    { nom: 'Astronomie', icon: Star },
    { nom: 'Lecture', icon: Book },
    { nom: 'Sport', icon: Heart },
    { nom: 'Photographie', icon: Camera }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation fixe */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900 bg-opacity-95 backdrop-blur-sm shadow-lg z-50 border-b border-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nedia Ben Ammar
            </div>
            <div className="flex space-x-6 overflow-x-auto ml-4">
              {['Accueil', 'Compétences', 'Projets', 'Expériences', 'Formation', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-purple-400 ring-4 ring-purple-500 ring-opacity-50">
              <img 
                src="/nad.jpg" 
                alt="Nedia Ben Ammar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Disponible immédiatement
              </span>
            </div>
          </div>
          
          <div>
            <h1 className="text-6xl font-bold text-white mb-4">
              Nedia Ben Ammar
            </h1>
            <p className="text-2xl text-purple-300 mb-2">
              Développeuse Full-Stack Junior · Angular & Spring Boot
            </p>
            <p className="text-lg text-gray-300 mb-2">
              Diplômée en Génie Logiciel & Systèmes d'Information (2026)
            </p>
            <p className="text-xl text-pink-300 font-semibold">
              🏆 Certifiée Microsoft Azure (AZ-900)
            </p>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
              Je conçois des applications web de bout en bout, du front-end Angular/React à l'API Spring Boot sécurisée.
              Forte d'une première carrière en relation client, gestion d'équipe et enseignement, je recherche un poste de développeuse web full-stack en France.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:bnedya@gmail.com" className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition shadow-lg">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="tel:+33622548092" className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Téléphone</span>
            </a>
            <a href="https://www.linkedin.com/in/nadia-ben-salem-ba949138b" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition shadow-lg">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/nadiabensalem" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full transition shadow-lg">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {['Communication technique', 'Adaptabilité', 'Résolution de problèmes', 'Travail d\'équipe'].map((atout) => (
              <div key={atout} className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-lg p-4 shadow-lg border border-purple-500">
                <p className="text-white font-semibold text-sm">{atout}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {interets.map((interet) => {
              const IconComponent = interet.icon;
              return (
                <div key={interet.nom} className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-purple-300 font-medium">{interet.nom}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="compétences" className="py-20 px-4 bg-slate-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Code className="w-16 h-16 mx-auto text-purple-400 mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">Compétences Techniques</h2>
            <p className="text-purple-300 text-lg">Technologies et outils que je maîtrise</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl shadow-2xl p-8 border border-purple-500">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-10 h-10 text-purple-300" />
                <h3 className="text-3xl font-bold text-white">Front-end</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {competences.frontend.map((tech) => (
                  <span key={tech} className="px-5 py-2 bg-purple-700 text-purple-100 rounded-full font-medium shadow-lg hover:scale-105 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-2xl p-8 border border-blue-500">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-10 h-10 text-blue-300" />
                <h3 className="text-3xl font-bold text-white">Back-end</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {competences.backend.map((tech) => (
                  <span key={tech} className="px-5 py-2 bg-blue-700 text-blue-100 rounded-full font-medium shadow-lg hover:scale-105 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl shadow-2xl p-8 border border-green-500">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-10 h-10 text-green-300" />
                <h3 className="text-3xl font-bold text-white">Bases de Données</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {competences.databases.map((tech) => (
                  <span key={tech} className="px-5 py-2 bg-green-700 text-green-100 rounded-full font-medium shadow-lg hover:scale-105 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900 to-pink-800 rounded-2xl shadow-2xl p-8 border border-pink-500">
              <div className="flex items-center space-x-3 mb-6">
                <Book className="w-10 h-10 text-pink-300" />
                <h3 className="text-3xl font-bold text-white">Outils & Méthodes</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {competences.tools.map((tech) => (
                  <span key={tech} className="px-5 py-2 bg-pink-700 text-pink-100 rounded-full font-medium shadow-lg hover:scale-105 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Briefcase className="w-16 h-16 mx-auto text-pink-400 mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">Projets</h2>
            <p className="text-purple-300 text-lg">Expérience pratique et réalisations</p>
          </div>

          {/* Projet phare : PFE EduCenter */}
          <div className="mb-12 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-pink-500">
            <span className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold uppercase tracking-wide">
              Projet de fin d'études
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{projetPhare.titre}</h3>
            <p className="text-pink-300 font-medium mb-6">{projetPhare.contexte}</p>
            <ul className="space-y-3 mb-6">
              {projetPhare.points.map((point) => (
                <li key={point} className="flex items-start text-gray-200 leading-relaxed">
                  <span className="text-pink-400 mr-3 mt-1">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {projetPhare.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-purple-700 text-purple-100 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
              {projetPhare.methodologie}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border border-purple-500 hover:border-pink-500 transition-all hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {projet.titre}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {projet.description}
                </p>
                <div className="mb-4">
                  <p className="text-purple-300 font-semibold mb-2 text-sm">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-700 text-purple-100 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                  {projet.methodologie}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expériences */}
      <section id="expériences" className="py-20 px-4 bg-slate-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Briefcase className="w-16 h-16 mx-auto text-purple-400 mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">Expériences Professionnelles</h2>
            <p className="text-purple-300 text-lg">Parcours professionnel</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp) => (
              <div key={exp.poste} className="bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl shadow-2xl p-8 border border-purple-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.poste}</h3>
                    <p className="text-purple-200 text-lg mb-1">{exp.entreprise}</p>
                    <p className="text-purple-300 mb-3">📍 {exp.lieu}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg whitespace-nowrap">
                      {exp.periode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="formation" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <GraduationCap className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">Formation & Diplômes</h2>
            <p className="text-purple-300 text-lg">Parcours académique</p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {formations.map((formation, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-2xl p-8 border border-purple-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {formation.diplome}
                    </h3>
                    <p className="text-purple-200 text-lg mb-1">
                      {formation.etablissement}
                    </p>
                    <p className="text-purple-300">
                      📍 {formation.lieu}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg">
                      {formation.periode}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 px-4 bg-slate-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">Certifications</h2>
            <p className="text-purple-300 text-lg">Compétences certifiées</p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl shadow-2xl p-8 border border-yellow-500">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {cert.titre} ({cert.code})
                    </h3>
                    <p className="text-yellow-100 mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    <p className="text-yellow-200 font-semibold mb-3">
                      🏢 {cert.organisme}
                    </p>
                    <a 
                      href={cert.lien} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center space-x-2 bg-white text-yellow-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-100 transition shadow-lg"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Voir la certification</span>
                    </a>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-6 py-3 bg-white text-yellow-900 rounded-full font-bold shadow-lg">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Mail className="w-16 h-16 mx-auto text-purple-400 mb-4" />
            <h2 className="text-5xl font-bold text-white mb-4">Me Contacter</h2>
            <p className="text-purple-300 text-lg">Restons en contact</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl shadow-2xl p-10 border border-purple-500">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-purple-800 bg-opacity-50 rounded-xl">
                <Mail className="w-12 h-12 text-purple-300" />
                <p className="font-semibold text-white text-lg">Email</p>
                <a href="mailto:bnedya@gmail.com" className="text-purple-300 hover:text-purple-100 transition break-all">
                  bnedya@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-blue-800 bg-opacity-50 rounded-xl">
                <Phone className="w-12 h-12 text-blue-300" />
                <p className="font-semibold text-white text-lg">Téléphone</p>
                <a href="tel:+33622548092" className="text-blue-300 hover:text-blue-100 transition">
                  +33 6 22 54 80 92
                </a>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-pink-800 bg-opacity-50 rounded-xl">
                <Linkedin className="w-12 h-12 text-pink-300" />
                <p className="font-semibold text-white text-lg">LinkedIn</p>
                <a href="https://www.linkedin.com/in/nadia-ben-salem-ba949138b" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-100 transition">
                  Mon profil
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl text-center">
              <p className="text-white text-xl font-semibold">
                📍 Basée en <span className="font-bold">France</span> · Télétravail ou présentiel · Disponible immédiatement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-purple-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Nedia Ben Ammar - Tous droits réservés</p>
          <p className="mt-2 text-purple-400 font-semibold">Développeuse Full-Stack Junior | Microsoft Azure Certified</p>
        </div>
      </footer>
    </div>
  );
}