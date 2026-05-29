import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, Star, Crown, Shield, Clock, ArrowRight } from 'lucide-react';

const features = [
  '✅ Instant WhatsApp Auto Replies',
  '✅ AI-Powered Chat Responses',
  '✅ 24/7 Customer Support Automation',
  '✅ Business FAQ Training System',
  '✅ Lead Capture Automation',
  '✅ Smart Reply Suggestions',
  '✅ Human-like Chat Experience',
  '✅ Multi-language Support',
  '✅ Website + WhatsApp Integration',
  '✅ Click-to-WhatsApp Landing Button',
  '✅ Sales Conversion Automation',
  '✅ Customer Inquiry Handling',
  '✅ Product/Service Explanation Bot',
  '✅ Order Tracking Responses',
  '✅ Appointment Booking System',
  '✅ CRM-like Conversation Tracking',
  '✅ Analytics Dashboard',
  '✅ Message Templates System',
  '✅ Auto Welcome Messages',
  '✅ Auto Follow-up Messages',
  '✅ Business Data Learning System',
  '✅ Fast Response Engine',
  '✅ Secure Cloud Hosting Setup',
  '✅ Mobile Friendly Control Panel',
  '✅ Easy One-Time Setup System',
];

const valueItems = [
  { label: 'Custom AI Development', value: '$2,000', strikethrough: true },
  { label: 'WhatsApp Business API', value: '$500', strikethrough: true },
  { label: '24/7 Human Support Team', value: '$3,000/mo', strikethrough: true },
  { label: 'Analytics Dashboard', value: '$200', strikethrough: true },
  { label: 'CRM Integration', value: '$800', strikethrough: true },
  { label: 'Multi-language Setup', value: '$400', strikethrough: true },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" ref={ref} className="relative py-24 z-10">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/6 filter blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-6"
          >
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-bold">Transparent Pricing — No Hidden Fees</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Simple, Honest{' '}
            <span className="text-gradient-gold">Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Worth thousands. Priced for everyone. One plan, everything included.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-start max-w-5xl mx-auto">
          {/* Value Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h3
              className="text-white font-bold text-xl mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              What This Would Cost Elsewhere
            </h3>
            <p className="text-white/40 text-sm mb-6">Market rate comparison</p>

            <div className="space-y-4 mb-8">
              {valueItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="flex items-center justify-between py-2 border-b border-white/5"
                >
                  <span className="text-white/60 text-sm">{item.label}</span>
                  <span className="text-red-400/70 text-sm font-semibold line-through">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass-gold rounded-2xl p-4 text-center">
              <p className="text-white/50 text-sm mb-1">Traditional total cost</p>
              <p className="text-3xl font-black text-red-400/80 line-through" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>$6,900+</p>
              <p className="text-amber-400 text-sm font-bold mt-2">↓ You save over $6,800</p>
            </div>

            {/* Urgency box */}
            <div className="mt-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/20 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-red-300 font-bold text-sm">Limited Slots Available</span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                We only accept a limited number of new setups each month to guarantee quality. Once slots are full, you\'ll be waitlisted.
              </p>
            </div>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-amber-400/30 via-violet-500/20 to-blue-500/30 blur-sm" />
            <div className="absolute -inset-px rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.4), rgba(139,92,246,0.3), rgba(59,130,246,0.3))',
              padding: '1px'
            }} />

            <div className="relative glass rounded-3xl overflow-hidden"
              style={{ background: 'rgba(10, 6, 25, 0.95)', border: '1px solid rgba(212,175,55,0.25)' }}>

              {/* Top banner */}
              <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 px-6 py-3 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                <div className="flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4 text-black" />
                  <span className="text-black font-black text-sm tracking-wider uppercase">🔥 Starter Premium Setup</span>
                  <Crown className="w-4 h-4 text-black" />
                </div>
              </div>

              <div className="p-8">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-white/50 text-xs ml-2">Used by modern online businesses</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="text-6xl font-black text-gradient-gold"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      $100
                    </span>
                    <span className="text-white/40 text-lg">one-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-white/70 text-sm font-medium">+ $10/month maintenance</span>
                    </div>
                  </div>
                </div>

                {/* What's included label */}
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">Everything included:</p>

                {/* Features list — 2 cols */}
                <div className="grid grid-cols-1 gap-2 mb-8 max-h-64 overflow-y-auto pr-2"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.4) transparent' }}>
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.04 + 0.5 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{f.replace('✅ ', '')}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Trust row */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: Shield, label: 'Secure Setup' },
                    { icon: Zap, label: '48hr Delivery' },
                    { icon: Clock, label: 'Always On' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Icon className="w-3.5 h-3.5 text-violet-400" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={`https://wa.me/923256069667?text=Hi! I want to get the AI WhatsApp Business Assistant setup for $100. Please let me know the next steps.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary w-full py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2 mb-4"
                >
                  Get Your AI Setup Now
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-3 rounded-2xl text-sm font-medium text-white/50 hover:text-white/80 text-center transition-colors flex items-center justify-center gap-2 border border-white/8 hover:border-white/15"
                >
                  Have questions? Contact us first
                </motion.a>

                <p className="text-center text-white/25 text-xs mt-4">
                  No subscription trap. Cancel maintenance anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-8 justify-center mt-16 text-center"
        >
          {[
            { icon: '🏪', title: 'Online Stores', desc: 'Selling products 24/7' },
            { icon: '🏥', title: 'Clinics & Salons', desc: 'Auto booking system' },
            { icon: '🏗️', title: 'Service Businesses', desc: 'Lead capture machine' },
            { icon: '📦', title: 'Local Shops', desc: 'Never miss a customer' },
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl px-6 py-4 text-center min-w-[140px]">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-white/40 text-xs">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
