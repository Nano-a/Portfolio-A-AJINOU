
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Mission } from '@/components/sections/Mission';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Mission />
            <Skills />
            <Experience />
            <Portfolio />
            <Services />
            <Stats />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
