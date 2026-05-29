import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly is the AI WhatsApp Business Assistant?',
    a: "It's a custom AI system we build for your business that connects to your WhatsApp number. It automatically replies to every customer message, 24/7, using smart AI trained with your specific business information. Think of it as a tireless digital employee that handles all your WhatsApp conversations.",
  },
  {
    q: 'Do I need any technical knowledge to use this?',
    a: "Absolutely not! That's the beauty of it. We handle everything from setup to configuration. You just provide us your business info (products, prices, FAQs), and we do the rest. You'll have a simple control panel on your phone to monitor conversations.",
  },
  {
    q: 'How long does it take to set up?',
    a: "We go live within 24–48 hours of your payment and information submission. We work fast so your business starts benefiting as soon as possible.",
  },
  {
    q: "What's included in the $10/month maintenance fee?",
    a: "The monthly fee covers cloud hosting for your AI system, ongoing technical maintenance, system updates, bug fixes, and basic support. This ensures your AI runs smoothly every single day.",
  },
  {
    q: 'Can I train the AI with my specific business info?',
    a: "Yes! That's exactly what we do. We train the AI with your product catalog, pricing, FAQs, business policies, store hours, and any other information you want it to know. The more info you give, the smarter it becomes.",
  },
  {
    q: 'What happens if the AI can\'t answer a question?',
    a: "The AI is trained to handle most common questions. For complex queries, it will politely let the customer know a human will follow up shortly and can flag the conversation for your attention. You're always in control.",
  },
  {
    q: 'Is my customers\' data safe?',
    a: "Absolutely. All data is encrypted and stored on secure cloud servers. We follow strict data privacy practices. Your customer conversations are private and protected at all times.",
  },
  {
    q: 'Can I cancel the monthly subscription anytime?',
    a: "Yes, you can cancel the $10/month maintenance at any time with no penalties. The $100 one-time setup fee is non-refundable as it covers the work done to build and deploy your system.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-24 z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-900/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-blue-400 text-sm">❓</span>
            <span className="text-white/70 text-sm font-medium">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Got <span className="text-gradient-primary">Questions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50"
          >
            Everything you need to know about getting your AI WhatsApp system.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${open === i ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.06)'}`, transition: 'border-color 0.3s' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span
                  className="text-white font-semibold text-sm pr-4 group-hover:text-violet-200 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 transition-colors ${open === i ? 'text-violet-400' : 'text-white/30'}`} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-white/5">
                      <p
                        className="text-white/60 text-sm leading-relaxed pt-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center glass-purple rounded-2xl p-6"
        >
          <p className="text-white/60 text-sm mb-3">Still have questions?</p>
          <a
            href="https://wa.me/923256069667?text=Hi! I have a question about the AI WhatsApp Business Assistant."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
