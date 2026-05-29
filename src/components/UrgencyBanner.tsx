import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock } from 'lucide-react';

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  const [slots, setSlots] = useState(3);

  // Count down slots randomly for urgency feel
  useEffect(() => {
    const timer = setTimeout(() => setSlots(2), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        >
          <div
            className="flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium text-black relative"
            style={{
              background: 'linear-gradient(90deg, #d4af37, #f6d365, #d4af37, #fda085, #d4af37)',
              backgroundSize: '300% 100%',
              animation: 'gradient-shift 4s ease infinite',
            }}
          >
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-center">
              🔥 <strong>Only {slots} setup slots</strong> remaining this month — Secure yours before they're gone!{' '}
              <a href="#pricing" className="underline font-bold hover:opacity-80 transition-opacity ml-1">
                Claim Now →
              </a>
            </span>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-60 transition-opacity"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
