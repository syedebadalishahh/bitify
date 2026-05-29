import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed K.',
    business: 'Online Clothing Store',
    location: '🇵🇰 Pakistan',
    avatar: 'AK',
    rating: 5,
    text: 'Before this AI system, I was losing customers because I couldn\'t reply fast enough. Now my WhatsApp replies 24/7 even when I\'m asleep. My sales increased by 40% in the first month!',
    color: 'from-violet-600 to-purple-700',
  },
  {
    name: 'Sara M.',
    business: 'Beauty Salon Owner',
    location: '🇦🇪 UAE',
    avatar: 'SM',
    rating: 5,
    text: 'The appointment booking feature is AMAZING. Customers can book directly via WhatsApp and I don\'t have to do anything. This system paid for itself in the first week.',
    color: 'from-pink-600 to-rose-700',
  },
  {
    name: 'Bilal R.',
    business: 'Restaurant Owner',
    location: '🇸🇦 Saudi Arabia',
    avatar: 'BR',
    rating: 5,
    text: 'We get hundreds of WhatsApp messages daily asking for menu, prices and delivery info. The AI handles ALL of it now. My team focuses on cooking, not replying to messages.',
    color: 'from-amber-600 to-orange-700',
  },
  {
    name: 'Fatima Z.',
    business: 'Freelance Consultant',
    location: '🇬🇧 UK',
    avatar: 'FZ',
    rating: 5,
    text: 'As a freelancer, I couldn\'t always respond to inquiries immediately. This AI captures leads and responds professionally while I\'m in meetings. Absolutely game-changing.',
    color: 'from-blue-600 to-cyan-700',
  },
  {
    name: 'Omar H.',
    business: 'E-commerce Business',
    location: '🇪🇬 Egypt',
    avatar: 'OH',
    rating: 5,
    text: 'Best $100 I ever spent for my business. The ROI is insane. The AI handles order queries, tracks packages, and even upsells products. It\'s like having a full-time sales team.',
    color: 'from-green-600 to-emerald-700',
  },
  {
    name: 'Zara N.',
    business: 'Real Estate Agent',
    location: '🇦🇪 Dubai',
    avatar: 'ZN',
    rating: 5,
    text: 'Every lead that messaged me used to wait hours for a reply. Now they get a response in seconds with all property details. My closing rate has gone up by 60%. Incredible.',
    color: 'from-indigo-600 to-violet-700',
  },
];

export default function TestimonialsSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-24 z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-900/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-900/10 rounded-full filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-amber-400 text-sm">⭐</span>
            <span className="text-white/70 text-sm font-medium">Loved by Business Owners Worldwide</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Real Results from{' '}
            <span className="text-gradient-primary">Real Businesses</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

            return (
              <motion.div
                ref={cardRef}
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (i % 3) * 0.15 }}
                className="card-feature rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-white/70 text-sm leading-relaxed mb-6 group-hover:text-white/85 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.business} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span>5.0 average rating</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <span className="text-white/40 text-sm">✓ Used by modern online businesses</span>
            <div className="w-px h-5 bg-white/10" />
            <span className="text-white/40 text-sm">✓ Multiple countries served</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
