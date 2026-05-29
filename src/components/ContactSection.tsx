import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';

const BUSINESS_TYPES = [
  'Online Store / E-commerce',
  'Restaurant / Food',
  'Salon / Beauty',
  'Clinic / Healthcare',
  'Real Estate',
  'Freelancer / Consultant',
  'Education / Coaching',
  'Retail / Local Shop',
  'Travel & Tourism',
  'Other',
];

export default function ContactSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  const [form, setForm] = useState({ name: '', businessType: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.businessType || !form.message) return;
    setStatus('loading');

    // Simulate submission — redirect to email
    const subject = encodeURIComponent(`AI WhatsApp Setup Inquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness Type: ${form.businessType}\n\nMessage:\n${form.message}`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:syedebadalishahqadri@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <span className="text-green-400 text-sm">💬</span>
            <span className="text-white/70 text-sm font-medium">Get in Touch — We Reply Fast</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Ready to{' '}
            <span className="text-gradient-gold">Transform</span>{' '}
            Your Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Have questions? We're here to help. Reach out and we'll set up your AI system within 48 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Talk to Us Directly
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Whether you have questions about the setup process, pricing, or want a live demo — we're just one message away.
              </p>
            </div>

            {/* Email */}
            <motion.a
              href="mailto:syedebadalishahqadri@gmail.com"
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center gap-4 glass rounded-2xl p-5 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ boxShadow: '0 0 30px rgba(139,92,246,0.4)' }}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/50 text-xs font-medium mb-0.5">Email us at</p>
                <p className="text-white font-semibold text-sm break-all">syedebadalishahqadri@gmail.com</p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/923256069667?text=Hi! I want to learn more about the AI WhatsApp Business Assistant."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center gap-4 glass rounded-2xl p-5 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{ boxShadow: '0 0 30px rgba(34,197,94,0.4)' }}>
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/50 text-xs font-medium mb-0.5">WhatsApp us at</p>
                <p className="text-white font-semibold">+92 325 606 9667</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs">Usually responds in minutes</span>
                </div>
              </div>
            </motion.a>

            {/* Quick links */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: '⚡', title: '48hr Setup', desc: 'Live in 2 days' },
                { emoji: '🌍', title: 'Worldwide', desc: 'We serve globally' },
                { emoji: '🔒', title: 'Secure', desc: 'Enterprise security' },
                { emoji: '🔄', title: 'Ongoing Support', desc: '$10/mo maintenance' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-3.5 text-center">
                  <div className="text-xl mb-1">{item.emoji}</div>
                  <p className="text-white font-semibold text-xs">{item.title}</p>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-10 text-center flex flex-col items-center justify-center h-full min-h-[400px]"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6"
                  style={{ boxShadow: '0 0 60px rgba(34,197,94,0.4)' }}>
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Message Sent! 🎉
                </h3>
                <p className="text-white/50 text-sm max-w-xs">
                  Your email client has opened. We'll get back to you within a few hours on WhatsApp or email.
                </p>
                <motion.a
                  href="https://wa.me/923256069667"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  className="btn-whatsapp mt-6 px-6 py-3 rounded-xl text-white font-bold text-sm flex items-center gap-2"
                >
                  Also message on WhatsApp →
                </motion.a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 space-y-5"
                style={{ border: '1px solid rgba(139,92,246,0.15)' }}
              >
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Send Us a Message
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Ahmed Khan"
                    required
                    className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-violet-500/50 transition-colors appearance-none cursor-pointer"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
                  >
                    <option value="" className="bg-gray-900 text-white/50">Select your business type...</option>
                    {BUSINESS_TYPES.map(type => (
                      <option key={type} value={type} className="bg-gray-900 text-white">{type}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, what you need, and any questions..."
                    required
                    rows={4}
                    className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-white/25 text-xs">
                  Or directly WhatsApp us at{' '}
                  <a
                    href="https://wa.me/923256069667"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    +92 325 606 9667
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
