import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import UrgencyBanner from './components/UrgencyBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaBanner from './components/CtaBanner';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    // Smooth scroll polyfill for Safari
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <AnimatePresence>
      <div className="relative min-h-screen mesh-gradient overflow-x-hidden">
        {/* Particle canvas */}
        <ParticleBackground />

        {/* Urgency top banner */}
        <UrgencyBanner />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero */}
          <HeroSection />

          {/* Stats */}
          <StatsSection />

          {/* Section divider */}
          <div className="section-divider mx-8" />

          {/* Features — 25 features */}
          <FeaturesSection />

          {/* Section divider */}
          <div className="section-divider mx-8" />

          {/* Mid-page CTA */}
          <CtaBanner />

          {/* How It Works */}
          <HowItWorksSection />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* Pricing */}
          <PricingSection />

          {/* FAQ */}
          <FaqSection />

          {/* Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky WhatsApp float */}
        <WhatsAppFloat />

        {/* Global page enter animation */}
        <motion.div
          className="fixed inset-0 bg-black z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </AnimatePresence>
  );
}
