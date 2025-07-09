
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Code, FolderOpen } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const stats = [
  {
    icon: Code,
    value: 10000,
    label: "Lignes de code écrites",
    suffix: "+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    value: 5000,
    label: "Heures d'apprentissage sur 4 ans",
    suffix: "h",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    value: 12,
    label: "Compétences maîtrisées",
    suffix: "",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FolderOpen,
    value: 5,
    label: "Projets réalisés",
    suffix: "",
    color: "from-orange-500 to-red-500"
  }
];

const AnimatedCounter: React.FC<{ 
  value: number; 
  duration?: number; 
  suffix?: string;
  inView: boolean;
}> = ({ value, duration = 2000, suffix = "", inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, duration, inView]);

  return (
    <span className="text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-muted/30">
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
              Réalisations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quelques chiffres qui reflètent mon parcours d'apprentissage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
              whileHover={{ y: -10 }}
            >
              <div className="relative p-8 bg-background rounded-2xl border border-border hover:shadow-xl transition-all duration-500">
                <motion.div
                  className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-white" size={32} />
                </motion.div>
                
                <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
