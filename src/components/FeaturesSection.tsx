import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquare, Brain, Clock, BookOpen, Target, Lightbulb,
  User, Globe, Link, ExternalLink, TrendingUp, HelpCircle,
  Package, Truck, Calendar, Database, BarChart3, FileText,
  Bell, RefreshCw, BookMarked, Zap, Shield, Smartphone, Settings
} from 'lucide-react';

const features = [
  { icon: MessageSquare, title: 'Instant WhatsApp Auto Replies', desc: 'Respond to every customer message instantly, 24/7 — zero delay, zero missed chats.', color: 'from-green-500 to-emerald-600', glow: 'rgba(34,197,94,0.3)' },
  { icon: Brain, title: 'AI-Powered Chat Responses', desc: 'Advanced AI generates smart, context-aware responses just like a trained human agent.', color: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.3)' },
  { icon: Clock, title: '24/7 Customer Support Automation', desc: 'Your business never closes. The AI works round the clock — even on holidays.', color: 'from-blue-500 to-cyan-600', glow: 'rgba(59,130,246,0.3)' },
  { icon: BookOpen, title: 'Business FAQ Training System', desc: 'Train the AI with your specific FAQs so it always gives accurate, on-brand answers.', color: 'from-amber-500 to-yellow-600', glow: 'rgba(245,158,11,0.3)' },
  { icon: Target, title: 'Lead Capture Automation', desc: 'Automatically collect names, numbers, and emails from every conversation.', color: 'from-pink-500 to-rose-600', glow: 'rgba(236,72,153,0.3)' },
  { icon: Lightbulb, title: 'Smart Reply Suggestions', desc: 'The AI learns and improves over time, offering smarter and more relevant replies.', color: 'from-orange-500 to-amber-600', glow: 'rgba(249,115,22,0.3)' },
  { icon: User, title: 'Human-like Chat Experience', desc: 'Customers feel like they\'re chatting with a real, friendly human — not a bot.', color: 'from-teal-500 to-cyan-600', glow: 'rgba(20,184,166,0.3)' },
  { icon: Globe, title: 'Multi-language Support', desc: 'Serve customers in English, Urdu, Arabic, Spanish and more — automatically.', color: 'from-indigo-500 to-blue-600', glow: 'rgba(99,102,241,0.3)' },
  { icon: Link, title: 'Website + WhatsApp Integration', desc: 'Seamlessly connect your website to WhatsApp for a unified customer experience.', color: 'from-cyan-500 to-blue-600', glow: 'rgba(6,182,212,0.3)' },
  { icon: ExternalLink, title: 'Click-to-WhatsApp Button', desc: 'Add a high-converting WhatsApp button to your landing pages and social profiles.', color: 'from-lime-500 to-green-600', glow: 'rgba(132,204,22,0.3)' },
  { icon: TrendingUp, title: 'Sales Conversion Automation', desc: 'Guide customers from first message all the way to purchase — fully automated.', color: 'from-violet-500 to-fuchsia-600', glow: 'rgba(167,139,250,0.3)' },
  { icon: HelpCircle, title: 'Customer Inquiry Handling', desc: 'Every inquiry gets a professional, detailed response within seconds.', color: 'from-blue-500 to-violet-600', glow: 'rgba(59,130,246,0.3)' },
  { icon: Package, title: 'Product/Service Explanation Bot', desc: 'The AI explains your products perfectly — features, pricing, and benefits.', color: 'from-emerald-500 to-teal-600', glow: 'rgba(16,185,129,0.3)' },
  { icon: Truck, title: 'Order Tracking Responses', desc: 'Customers can check their order status directly via WhatsApp in seconds.', color: 'from-orange-500 to-red-600', glow: 'rgba(239,68,68,0.3)' },
  { icon: Calendar, title: 'Appointment Booking System', desc: 'Let customers book appointments 24/7 via automated WhatsApp conversations.', color: 'from-pink-500 to-fuchsia-600', glow: 'rgba(217,70,239,0.3)' },
  { icon: Database, title: 'CRM-like Conversation Tracking', desc: 'Every conversation is stored, tagged, and organized like a professional CRM.', color: 'from-sky-500 to-blue-600', glow: 'rgba(14,165,233,0.3)' },
  { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track messages, response rates, leads captured, and sales conversions in real-time.', color: 'from-amber-500 to-orange-600', glow: 'rgba(245,158,11,0.3)' },
  { icon: FileText, title: 'Message Templates System', desc: 'Pre-built templates for sales, support, promotions, and follow-ups — ready to go.', color: 'from-violet-500 to-purple-700', glow: 'rgba(139,92,246,0.3)' },
  { icon: Bell, title: 'Auto Welcome Messages', desc: 'Greet every new customer with a warm, personalized welcome message automatically.', color: 'from-green-500 to-lime-600', glow: 'rgba(34,197,94,0.3)' },
  { icon: RefreshCw, title: 'Auto Follow-up Messages', desc: 'Automatically follow up with leads who didn\'t respond — recover lost sales.', color: 'from-blue-500 to-indigo-600', glow: 'rgba(99,102,241,0.3)' },
  { icon: BookMarked, title: 'Business Data Learning System', desc: 'Feed the AI your menus, catalogs, and policies — it learns everything about you.', color: 'from-rose-500 to-pink-600', glow: 'rgba(244,63,94,0.3)' },
  { icon: Zap, title: 'Fast Response Engine', desc: 'Our optimized AI engine replies in under 3 seconds — faster than any human.', color: 'from-yellow-400 to-amber-500', glow: 'rgba(234,179,8,0.3)' },
  { icon: Shield, title: 'Secure Cloud Hosting Setup', desc: 'Your data is protected with enterprise-grade encryption and secure cloud hosting.', color: 'from-teal-500 to-emerald-600', glow: 'rgba(20,184,166,0.3)' },
  { icon: Smartphone, title: 'Mobile Friendly Control Panel', desc: 'Manage everything from your phone — monitor, configure and update on the go.', color: 'from-indigo-500 to-violet-600', glow: 'rgba(99,102,241,0.3)' },
  { icon: Settings, title: 'Easy One-Time Setup System', desc: 'We handle everything for you. Just one simple setup session and you\'re live.', color: 'from-slate-500 to-gray-600', glow: 'rgba(212,175,55,0.3)' },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07, ease: 'easeOut' }}
      className="card-feature rounded-2xl p-6 group cursor-default relative overflow-hidden"
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at top left, ${feature.glow}, transparent 60%)` }}
      />

      {/* Icon */}
      <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        style={{ boxShadow: `0 8px 32px ${feature.glow}` }}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="text-white font-bold text-base mb-2 group-hover:text-white transition-colors"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {feature.title}
        </h3>
        <p
          className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {feature.desc}
        </p>
      </div>

      {/* Number badge */}
      <div className="absolute top-4 right-4 text-white/10 font-black text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {String(index + 1).padStart(2, '0')}
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="features" className="relative py-24 z-10">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-violet-900/10 filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-violet-400 text-sm font-bold">✦</span>
            <span className="text-white/70 text-sm font-medium">25 Powerful Features Included</span>
            <span className="text-violet-400 text-sm font-bold">✦</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Everything Your Business{' '}
            <span className="text-gradient-primary">Needs to Grow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            One powerful AI system packed with 25 enterprise-grade features — all for an unbelievably low one-time price.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 mb-6 text-sm">All 25 features included in the $100 one-time setup</p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary px-10 py-4 rounded-2xl text-base font-bold inline-flex items-center gap-2"
          >
            Get All Features Now — $100 Setup
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
