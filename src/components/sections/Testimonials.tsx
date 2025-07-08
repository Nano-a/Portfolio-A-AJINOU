
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Professeure d'Informatique",
    company: "Université Paris-Saclay",
    content: "Alex fait preuve d'une excellente maîtrise technique et d'une grande créativité dans ses projets. Son approche méthodique et sa passion pour l'innovation en font un étudiant remarquable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ab?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "Développeur Senior",
    company: "TechCorp Solutions",
    content: "J'ai eu l'occasion de mentorer Alex lors de son stage. Sa capacité d'apprentissage rapide et son attention aux détails sont impressionnantes. Un futur développeur prometteur.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Chef de Projet",
    company: "Digital Innovation Lab",
    content: "Alex a collaboré avec notre équipe sur un projet d'IA. Sa compréhension des enjeux techniques et sa communication claire ont grandement contribué au succès du projet.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ce qu'ils{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              disent
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Témoignages de professeurs, mentors et collaborateurs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full p-6 bg-muted/30 rounded-2xl border border-border hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Quote className="text-primary mb-4" size={24} />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
