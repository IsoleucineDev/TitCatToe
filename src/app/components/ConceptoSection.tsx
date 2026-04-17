import { motion } from 'motion/react';
import { PulsingHeart } from './AnimatedIcons';

export function ConceptoSection() {
  const manifestoLines = [
    'Cada gato tiene una historia',
    'Cada visita es un nuevo descubrimiento',
    'Aquí el amor no tiene raza ni edad',
  ];

  return (
    <section className="py-12 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <PulsingHeart />
          <h2
            className="text-4xl"
            style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0A0A0A' }}
          >
            NUESTRO CONCEPTO
          </h2>
          <PulsingHeart />
        </div>

        <div className="space-y-4">
          {manifestoLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#E8FF00] opacity-40 transform -skew-x-2" />
              <p
                className="relative text-2xl py-3 px-4"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                {line}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
