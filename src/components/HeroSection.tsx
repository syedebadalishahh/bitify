import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Star } from 'lucide-react';

const TYPING_PHRASES = [
  'AI Sales Machine',
  '24/7 Support Agent',
  'Lead Capture System',
  'Revenue Booster',
  'Business Assistant',
];

const FLOAT_SHAPES = [
  { size: 80, top: '12%', left: '8%', delay: 0, color: 'from-violet-600/30 to-blue-600/20', duration: 7 },
  { size: 60, top: '70%', left: '6%', delay: 1.5, color: 'from-amber-500/20 to-yellow-400/15', duration: 9 },
  { size: 100, top: '20%', right: '8%', delay: 0.8, color: 'from-blue-600/25 to-cyan-500/15', duration: 8 },
  { size: 50, top: '65%', right: '10%', delay: 2, color: 'from-green-500/25 to-emerald-400/15', duration: 6 },
  { size: 40, top: '40%', left: '3%', delay: 3, color: 'from-pink-500/20 to-violet-500/15', duration: 10 },
];



function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPING_PHRASES[phraseIndex];

    if (!isDeleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span className="text-gradient-gold">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}



const trustItems = [
  { icon: Shield, label: 'Secure Setup' },
  { icon: Zap, label: 'Instant Deploy' },
  { icon: Globe, label: 'Multi-Language' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/15 filter blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/15 filter blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-500/8 filter blur-[80px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating shapes */}
      {FLOAT_SHAPES.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-2xl bg-gradient-to-br ${shape.color} backdrop-blur-sm border border-white/5`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: 'left' in shape ? shape.left : undefined,
            right: 'right' in shape ? shape.right : undefined,
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <span className="badge-hot">🔥 Limited Slots</span>
              <span className="text-white/70 text-sm font-medium">Only a few setups available this month</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Turn Your WhatsApp Into A{' '}
              <br className="hidden sm:block" />
              <TypingText />
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We build a powerful AI system that replies to your customers{' '}
              <span className="text-white/90 font-semibold">instantly</span>, increases sales, and{' '}
              <span className="text-white/90 font-semibold">never sleeps</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary px-8 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 shadow-2xl"
              >
                Get Your AI Setup Now
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`https://wa.me/923256069667?text=Hi! I want to learn more about the AI WhatsApp Business Assistant.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-whatsapp px-8 py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/50">
                  <Icon className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 star-glow" />
                ))}
                <span className="text-sm text-white/50 ml-1 font-medium">5.0 Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right — 3D phone mockup + chat */}
          <div className="relative hidden lg:flex items-center justify-center h-[520px]">
            {/* Glow behind phone */}
            <div className="absolute w-80 h-80 rounded-full bg-violet-600/20 filter blur-[80px]" />

            {/* Phone Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
              className="relative z-10 animate-rotate-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-64 h-[480px] rounded-[2.5rem] glass border border-white/12 shadow-2xl overflow-hidden relative"
                style={{ boxShadow: '0 0 80px rgba(139, 92, 246, 0.3), 0 60px 120px rgba(0,0,0,0.5)' }}>
                {/* Status bar */}
                <div className="bg-black/40 px-5 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-white text-xs font-semibold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 rounded-sm border border-white/60 relative">
                      <div className="absolute inset-0.5 left-0.5 right-2 bg-white/80 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* WhatsApp-like header */}
                <div className="bg-gradient-to-r from-green-700 to-green-600 px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center text-xs font-bold text-white">🤖</div>
                  <div>
                    <p className="text-white font-semibold text-sm">AI Business Bot</p>
                    <p className="text-green-200 text-xs">Always Online</p>
                  </div>
                </div>

                {/* Chat area */}
                <div className="flex-1 bg-[#0a1628] p-3 space-y-2 min-h-[320px]">
                  {[
                    { from: 'user', text: 'What products do you offer?', t: '9:30' },
                    { from: 'ai', text: '🎯 We offer 3 premium packages! Here\'s what\'s included...', t: '9:30' },
                    { from: 'user', text: 'How fast do you deliver?', t: '9:31' },
                    { from: 'ai', text: '⚡ Same-day delivery available in your area! Would you like to place an order?', t: '9:31' },
                    { from: 'user', text: 'Yes! How do I pay?', t: '9:32' },
                    { from: 'ai', text: '✅ Payment via card, bank transfer or cash. Here\'s the payment link 👉', t: '9:32' },
                  ].map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.from === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3 + 1 }}
                      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[10px] leading-relaxed ${
                        msg.from === 'user'
                          ? 'bg-[#005c4b] text-white rounded-tr-sm'
                          : 'bg-[#1f2c34] text-white/90 rounded-tl-sm'
                      }`}>
                        {msg.text}
                        <div className="text-white/40 text-[8px] text-right mt-0.5">{msg.t} ✓✓</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="bg-[#1a232e] px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-[#2a3a4a] rounded-full px-3 py-1.5 text-white/30 text-xs">
                    AI is handling this…
                  </div>
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orbiting badges */}
            {[
              { icon: '⚡', label: 'Instant', color: 'from-amber-500/30 to-yellow-400/20', top: '5%', right: '5%' },
              { icon: '🧠', label: 'AI Brain', color: 'from-violet-600/30 to-blue-500/20', bottom: '10%', left: '0%' },
              { icon: '🔒', label: 'Secure', color: 'from-green-500/30 to-emerald-400/20', top: '45%', left: '-5%' },
            ].map((badge, i) => (
              <motion.div
                key={i}
                className={`absolute glass-purple rounded-xl px-3 py-2 text-center bg-gradient-to-br ${badge.color}`}
                style={{ top: badge.top, right: badge.right, bottom: badge.bottom, left: badge.left }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
                transition={{
                  opacity: { delay: i * 0.3 + 1.5 },
                  scale: { delay: i * 0.3 + 1.5 },
                  y: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }
                }}
              >
                <div className="text-lg">{badge.icon}</div>
                <div className="text-white/80 text-[10px] font-semibold">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm flex flex-col items-center gap-2"
      >
        <span className="text-xs">Scroll to explore</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
