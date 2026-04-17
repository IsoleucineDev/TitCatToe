import { motion } from 'motion/react';
import { Link } from 'react-router';
import { cats } from '../data/mockData';
import { CatCard } from './CatCard';
import { RotatingStar } from './AnimatedIcons';
import { ArrowRight } from 'lucide-react';

export function GatosSection() {
  return (
    <section id="gatos" className="py-16 px-8">
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-8"
      >
        <RotatingStar />
        <h2
          className="text-5xl"
          style={{ fontFamily: 'Abril Fatface, serif', color: '#0A0A0A' }}
        >
          GATOS DESTACADOS
        </h2>
        <RotatingStar />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>

      {/* Editorial Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-block bg-[#FF2D8A] text-white px-8 py-4 border-4 border-black rotate-[-2deg]">
          <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px' }}>
            ¡Todos buscan un hogar lleno de amor!
          </p>
        </div>
        
        {/* Link to CRUD */}
        <Link to="/gatos">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#E8FF00] text-black px-6 py-3 border-4 border-black font-bold flex items-center gap-2 mx-auto"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            VER TODOS LOS GATOS
            <ArrowRight size={20} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}