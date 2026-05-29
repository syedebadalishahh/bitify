import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { value: 24, suffix: '/7', label: 'AI Always Online', icon: '🟢' },
  { value: 3, suffix: 's', label: 'Avg Response Time', icon: '⚡' },
  { value: 300, suffix: '%', label: 'More Leads Captured', icon: '📈' },
  { value: 99, suffix: '%', label: 'Uptime Guaranteed', icon: '🛡️' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div
                  className="text-4xl md:text-5xl font-black text-gradient-gold mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} delay={i * 0.2} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-white/50 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
