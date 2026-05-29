import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative py-20 z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(29,78,216,0.15) 50%, rgba(212,175,55,0.08) 100%)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

        {/* Animated orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-violet-600/20 rounded-full filter blur-[80px] animate-glow-pulse" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full filter blur-[80px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
            <Zap className="w-5 h-5 text-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Stop Losing Customers{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient-gold">While You Sleep</span>
          </h2>

          <p
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Every unanswered WhatsApp message is a lost sale. Our AI makes sure{' '}
            <span className="text-white font-semibold">every customer</span> gets an instant,{' '}
            professional reply — <span className="text-white font-semibold">24 hours a day, 7 days a week.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary px-10 py-4 rounded-2xl text-lg font-black flex items-center justify-center gap-2 shadow-2xl"
            >
              Get Your AI Setup Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://wa.me/923256069667?text=Hi! I want to get the AI WhatsApp setup. Tell me more."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-whatsapp px-8 py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now — Free Consultation
            </motion.a>
          </div>

          <p className="text-white/25 text-sm mt-6">
            One-time $100 setup · $10/month maintenance · No contracts · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
