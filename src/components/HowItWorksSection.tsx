import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardList, Cpu, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'You Sign Up & Share Business Info',
    desc: 'Fill out a simple form telling us about your business — products, services, FAQs, and customer questions. No tech knowledge needed.',
    color: 'from-amber-500 to-yellow-500',
    glow: 'rgba(245,158,11,0.4)',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'We Build & Train Your AI',
    desc: 'Our team sets up your entire AI system, trains it with your business data, and connects it directly to your WhatsApp number.',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.4)',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'We Go Live — You Relax',
    desc: 'Your AI goes live within 24–48 hours. From that moment, it replies to every customer message instantly — day or night.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.4)',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Watch Sales Grow Automatically',
    desc: 'Customers get instant replies, leads get captured, appointments get booked — all while you focus on running your business.',
    color: 'from-green-500 to-emerald-500',
    glow: 'rgba(34,197,94,0.4)',
  },
];

export default function HowItWorksSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="how-it-works" className="relative py-24 z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-900/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-blue-400 text-sm font-bold">→</span>
            <span className="text-white/70 text-sm font-medium">Simple 4-Step Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Up & Running in{' '}
            <span className="text-gradient-gold">48 Hours</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            We do all the heavy lifting. You sit back and watch your WhatsApp transform into a revenue-generating machine.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px hidden lg:block"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(59,130,246,0.4), rgba(34,197,94,0.4), transparent)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const ref = useRef(null);
              const stepInView = useInView(ref, { once: true, margin: '-60px' });
              const Icon = step.icon;

              return (
                <motion.div
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative mx-auto w-32 h-32 mb-8">
                    {/* Outer ring */}
                    <div
                      className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${step.glow}, transparent 70%)` }}
                    />
                    <div
                      className="absolute inset-2 rounded-full border border-white/10 group-hover:border-white/20 transition-colors duration-500"
                    />

                    {/* Main icon circle */}
                    <div
                      className={`absolute inset-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                      style={{ boxShadow: `0 0 40px ${step.glow}` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full glass-purple border border-violet-500/30 flex items-center justify-center">
                      <span className="text-violet-300 font-black text-xs">{step.step}</span>
                    </div>
                  </div>

                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Simple Explanation Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 glass-purple rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* BG decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-violet-600/20 rounded-full filter blur-3xl" />

          <div className="relative z-10">
            <div className="text-5xl mb-6">💡</div>
            <h3
              className="text-2xl md:text-3xl font-black text-white mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Think of it this way...
            </h3>
            <p
              className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              This system helps business owners <span className="text-white font-semibold">never miss a customer again.</span>{' '}
              Even when you are sleeping, traveling, or busy,{' '}
              <span className="text-gradient-gold font-bold">the AI replies instantly like a real human.</span>{' '}
              Your customers feel heard, your leads get captured, and your sales never stop —{' '}
              <span className="text-white font-semibold">even at 3am.</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              {['😴 While you sleep', '✈️ While you travel', '🏃 While you\'re busy', '🎉 While you celebrate'].map((item) => (
                <div key={item} className="glass rounded-full px-5 py-2.5 text-white/70 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
