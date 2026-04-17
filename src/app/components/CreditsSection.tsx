import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

export function CreditsSection() {
  const developers = [
    { name: 'Ileana', color: '#E8FF00' },
    { name: 'Yael', color: '#FF2D8A' },
    { name: 'Marco', color: '#0033FF' },
    { name: 'Alan', color: '#39FF14' },
  ];

  return (
    <section className="py-12 px-8 bg-black -mx-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Code2 size={32} color="#E8FF00" />
          <h2
            className="text-4xl text-white"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            DESARROLLADO CON ❤️ POR
          </h2>
          <Code2 size={32} color="#E8FF00" />
        </div>

        {/* Developers Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {developers.map((dev, i) => (
            <motion.div
              key={dev.name}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
              className="relative"
            >
              <div
                className="px-8 py-4 border-4 border-white"
                style={{ 
                  backgroundColor: dev.color,
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '28px',
                  color: dev.color === '#E8FF00' || dev.color === '#39FF14' ? '#0A0A0A' : 'white',
                }}
              >
                {dev.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* TicCatToe Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="inline-block relative"
        >
          <div className="absolute inset-0 bg-[#FF2D8A] transform rotate-2" />
          <div className="relative bg-[#E8FF00] px-6 py-3 border-4 border-white">
            <p
              className="text-black"
              style={{ fontFamily: 'Abril Fatface, serif', fontSize: '24px' }}
            >
              TicCatToe © 2026
            </p>
          </div>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-white mt-6 text-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Hecho con código, café y mucho amor gatuno 🐾
        </motion.p>
      </motion.div>
    </section>
  );
}
