import { motion } from 'motion/react';
import { news } from '../data/mockData';
import { Megaphone } from 'lucide-react';

export function NoticiasSection() {
  const categoryColors: { [key: string]: string } = {
    Voluntariado: '#0033FF',
    Evento: '#FF2D8A',
    Logro: '#E8FF00',
    Instalaciones: '#39FF14',
  };

  return (
    <section id="noticias" className="py-16 px-8 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ x: [0, 5, 0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Megaphone size={40} color="#FF4500" />
          </motion.div>
          <h2
            className="text-5xl"
            style={{ fontFamily: 'Abril Fatface, serif', color: '#0A0A0A' }}
          >
            NOTICIAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 2 : -2 }}
              className="bg-white border-6 border-black p-6 relative overflow-hidden cursor-pointer"
            >
              {/* Diagonal Background Accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-20 rotate-45 transform translate-x-8 -translate-y-8"
                style={{ backgroundColor: categoryColors[item.category] || '#E8FF00' }}
              />

              {/* Category Sticker */}
              <motion.div
                whileHover={{ rotate: [0, -3, 3, -3, 0] }}
                className="inline-block px-4 py-1 border-3 border-black mb-4"
                style={{
                  backgroundColor: categoryColors[item.category] || '#E8FF00',
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '14px',
                  color: item.category === 'Logro' ? '#0A0A0A' : 'white',
                }}
              >
                {item.category}
              </motion.div>

              {/* Date */}
              <div
                className="text-sm mb-3"
                style={{ fontFamily: 'Inter, sans-serif', color: '#717182' }}
              >
                📅 {item.date}
              </div>

              {/* Title */}
              <h3
                className="text-2xl"
                style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#0A0A0A' }}
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#FF2D8A] transform rotate-2" />
            <div className="relative bg-[#E8FF00] px-8 py-4 border-4 border-black">
              <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px' }}>
                ¿Quieres ser parte del cambio? ¡Únete a nosotros!
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
