import { motion } from 'motion/react';
import { RotatingStar } from './AnimatedIcons';

export function HeroSection() {
  return (
    <section id="inicio" className="py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Title with Neon Yellow Highlight */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#E8FF00] transform -skew-y-1" />
          <h1
            className="relative text-6xl py-4 px-2"
            style={{ fontFamily: 'Abril Fatface, serif', color: '#0A0A0A' }}
          >
            TicCatToe <br />
            <span className="inline-flex items-center gap-2">
              <RotatingStar />
              RESCATA & ADOPTA
              <RotatingStar />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl mb-8 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
          Vagar sin rumbo por el albergue es la mejor aventura
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF2D8A] text-white px-8 py-4 border-4 border-black shadow-lg"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px' }}
          >
            CONOCE A LOS GATOS
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0033FF] text-white px-8 py-4 border-4 border-black shadow-lg"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px' }}
          >
            ADOPTA AHORA
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}