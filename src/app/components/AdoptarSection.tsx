import { motion } from 'motion/react';
import { SlidingHouse } from './AnimatedIcons';

export function AdoptarSection() {
  const steps = [
    { number: 1, title: 'Visita el albergue', desc: 'Conoce a nuestros gatos' },
    { number: 2, title: 'Llena el formulario', desc: 'Información básica' },
    { number: 3, title: 'Entrevista', desc: 'Charlamos contigo' },
    { number: 4, title: '¡Adopta!', desc: 'Tu nuevo amigo te espera' },
  ];

  return (
    <section id="adoptar" className="py-16 px-8 bg-[#0033FF] -mx-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <SlidingHouse />
          <h2
            className="text-5xl text-white"
            style={{ fontFamily: 'Abril Fatface, serif' }}
          >
            PROCESO DE ADOPCIÓN
          </h2>
          <SlidingHouse />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -3 : 3 }}
              className="bg-white border-6 border-black p-6 relative"
            >
              {/* Step Number */}
              <div
                className="absolute -top-4 -left-4 w-12 h-12 bg-[#E8FF00] border-4 border-black rounded-full flex items-center justify-center text-2xl"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {step.number}
              </div>

              <h3
                className="text-xl mb-2 mt-4"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {step.title}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E8FF00] text-black px-12 py-6 border-6 border-black shadow-2xl"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px' }}
          >
            COMIENZA TU ADOPCIÓN
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
