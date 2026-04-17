import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import { Cat } from '../data/mockData';
import { ShakingCalendar, BlinkingPill } from './AnimatedIcons';

const catImages: { [key: string]: string } = {
  'siamese cat portrait': 'https://images.unsplash.com/photo-1743560769534-1f8abb6acb9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2MzQzNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'calico kitten playful': 'https://images.unsplash.com/photo-1772495699587-2fadefb6bfe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpY28lMjBraXR0ZW4lMjBwbGF5ZnVsfGVufDF8fHx8MTc3NjI5NzI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'black cat elegant': 'https://images.unsplash.com/photo-1648774280075-e2cadc5bde80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhdCUyMGVsZWdhbnR8ZW58MXx8fHwxNzc2MzcxMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'orange tabby cat': 'https://images.unsplash.com/photo-1667518157438-05eccbadb225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0YWJieSUyMGNhdHxlbnwxfHx8fDE3NzYzMDAwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'persian cat fluffy': 'https://images.unsplash.com/photo-1599907370836-939f2d59b897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NjI0NzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'domestic shorthair cat': 'https://images.unsplash.com/photo-1602634353750-d58ec14064c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lc3RpYyUyMHNob3J0aGFpciUyMGNhdHxlbnwxfHx8fDE3NzYzNzExOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function CatCard({ cat }: { cat: Cat }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const healthColors = {
    healthy: '#39FF14',
    treatment: '#E8FF00',
    critical: '#FF2D8A',
  };

  const stickerTexts = ['SOUL MATE', 'DISPONIBLE', 'AMOR PURO', 'ÚNICO'];
  const randomSticker = stickerTexts[cat.id % stickerTexts.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative overflow-hidden">
        {/* Front Side */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="bg-white border-8 border-black shadow-lg"
        >
          <div style={{ backfaceVisibility: 'hidden' }}>
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={catImages[cat.image]}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
              
              {/* Sticker Overlay */}
              <motion.div
                initial={{ rotate: -8 }}
                whileHover={{ rotate: 3 }}
                className="absolute top-4 right-4 bg-[#E8FF00] px-4 py-2 border-3 border-black shadow-md"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {randomSticker}
              </motion.div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3
                className="text-4xl mb-2"
                style={{ fontFamily: 'Abril Fatface, serif', color: '#0A0A0A' }}
              >
                {cat.name}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {/* Breed Pill */}
                <span
                  className="bg-[#FF2D8A] text-white px-4 py-1 text-sm border-2 border-black"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {cat.breed}
                </span>

                {/* Age Badge */}
                <span
                  className="bg-[#0033FF] text-white px-4 py-1 text-sm rounded-full border-2 border-black"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {cat.age}
                </span>
              </div>

              {/* View More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-black text-[#E8FF00] px-6 py-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                <Eye size={18} />
                VER MÁS
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          className="bg-black text-white border-8 border-[#E8FF00] p-8 flex flex-col justify-center items-center gap-4"
        >
          <div className="text-center">
            {/* Health Status */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <BlinkingPill />
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px' }}>
                Estado de Salud
              </span>
            </div>
            <div
              className="text-2xl mb-6 px-4 py-2 border-4"
              style={{
                borderColor: healthColors[cat.health_status],
                color: healthColors[cat.health_status],
                fontFamily: 'Bebas Neue, sans-serif',
              }}
            >
              {cat.health_status === 'healthy' && 'SANO'}
              {cat.health_status === 'treatment' && 'EN TRATAMIENTO'}
              {cat.health_status === 'critical' && 'CRÍTICO'}
            </div>

            {/* Arrival Date */}
            <div className="flex items-center justify-center gap-2">
              <ShakingCalendar />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>
                Llegó: <strong>{cat.arrival_date}</strong>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
