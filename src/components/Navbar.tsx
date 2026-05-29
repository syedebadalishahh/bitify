import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/8 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 border border-black/50" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm text-white tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  AI WhatsApp
                </span>
                <span className="text-xs font-medium text-gradient-gold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Business Assistant
                </span>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-violet-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="#pricing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
              >
                Get Started — $100
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-white/8 md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white font-medium py-2 border-b border-white/5 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 py-3 rounded-xl text-center font-bold text-black"
              >
                Get Started — $100
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
