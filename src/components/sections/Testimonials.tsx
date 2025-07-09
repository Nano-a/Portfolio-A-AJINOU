
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Salhi",
    role: "Étudiante en Informatique/Médecine",
    company: "Université Paris Cité",
    content: "En attente de son témoignage.",
    rating: 5,
    avatar: "/images/testimonials/sarah.png"
  },
  {
    id: 2,
    name: "Naïm Cherchour",
    role: "Étudiant en Informatique",
    company: "Université Paris Cité",
    content: "En attente de son témoignage.",
    rating: 5,
    avatar: "/images/testimonials/naim.png"
  },
  {
    id: 3,
    name: "Gebrayel Maroun",
    role: "Étudiant en Informatique",
    company: "Université Paris Cité",
    content: "En attente de son témoignage.",
    rating: 5,
    avatar: "/images/testimonials/maroun.png"
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
