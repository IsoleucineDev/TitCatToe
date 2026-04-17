import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Edit, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams, Link } from 'react-router';
import { store } from '../store';
import { Cat } from '../types';
import { toast } from 'sonner';

export function GatosDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    if (id) {
      const foundCat = store.getCat(id);
      if (foundCat) {
        setCat(foundCat);
      } else {
        toast.error('Gato no encontrado');
        navigate('/gatos');
      }
    }
  }, [id, navigate]);

  const HeartbeatIcon = () => (
    <motion.div
      animate={{
        scale: [1, 1.2, 1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="inline-block"
    >
      <Heart size={24} fill="#FF2D8A" color="#FF2D8A" />
    </motion.div>
  );

  if (!cat) {
    return (
      <div className="p-8 text-center">
        <p>Cargando...</p>
      </div>
    );
  }

  const healthColors = {
    healthy: '#39FF14',
    treatment: '#E8FF00',
    critical: '#FF2D8A',
  };

  const healthLabels = {
    healthy: 'SANO',
    treatment: 'EN TRATAMIENTO',
    critical: 'CRÍTICO',
  };

  return (
    <div className="p-8">
      {/* Back Button */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mb-6"
      >
        <Link to="/gatos">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 border-2 border-black hover:bg-gray-100"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <ArrowLeft size={20} />
            REGRESAR
          </motion.button>
        </Link>
      </motion.div>

      {/* Photo Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-8"
      >
        <div className="w-full h-96 border-8 border-black overflow-hidden bg-gray-200 relative">
          {cat.photo ? (
            <img src={cat.photo} alt={cat.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-9xl">
              🐱
            </div>
          )}

          {/* Soul Mate Sticker */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute top-8 right-8 bg-[#FF2D8A] text-white px-6 py-3 border-4 border-black shadow-xl"
          >
            <p
              className="text-2xl font-bold"
              style={{ fontFamily: 'Abril Fatface, serif' }}
            >
              SOUL MATE
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-6xl mb-6"
        style={{ fontFamily: 'Abril Fatface, serif' }}
      >
        {cat.name}
      </motion.h1>

      {/* Info Grid */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        {/* Breed */}
        <div className="border-4 border-black p-4 bg-white">
          <p
            className="text-xs font-bold mb-1 tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            RAZA
          </p>
          <p className="text-2xl font-bold">{cat.breed}</p>
        </div>

        {/* Age */}
        <div className="border-4 border-black p-4 bg-white">
          <p
            className="text-xs font-bold mb-1 tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            EDAD
          </p>
          <p className="text-2xl font-bold">{cat.age} año{cat.age !== 1 ? 's' : ''}</p>
        </div>

        {/* Health Status */}
        <div className="border-4 border-black p-4 bg-white">
          <p
            className="text-xs font-bold mb-1 tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            SALUD
          </p>
          <div className="flex items-center gap-2">
            <HeartbeatIcon />
            <p
              className="text-xl font-bold"
              style={{ color: healthColors[cat.health_status] }}
            >
              {healthLabels[cat.health_status]}
            </p>
          </div>
        </div>

        {/* Arrival Date */}
        <div className="border-4 border-black p-4 bg-white">
          <p
            className="text-xs font-bold mb-1 tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            LLEGADA
          </p>
          <p className="text-xl font-bold">
            {new Date(cat.arrival_date).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </motion.div>

      {/* History/Description */}
      {cat.description && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2
            className="text-3xl mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            HISTORIA
          </h2>
          <div className="border-4 border-black p-6 bg-white">
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {cat.description}
            </p>
          </div>
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        {/* Adopt Button */}
        {!cat.adopted && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(232, 255, 0, 0.7)',
                '0 0 0 10px rgba(232, 255, 0, 0)',
                '0 0 0 0 rgba(232, 255, 0, 0)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
              },
            }}
            className="w-full bg-[#E8FF00] text-black py-6 px-8 border-4 border-black font-bold text-2xl flex items-center justify-center gap-3"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            🐾 QUIERO ADOPTARLO
          </motion.button>
        )}

        {/* Edit Button */}
        <Link to={`/gatos/${cat.id}/edit`} className="block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#0033FF] text-white py-4 px-6 border-4 border-black font-bold text-xl flex items-center justify-center gap-2"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <Edit size={20} />
            EDITAR INFORMACIÓN
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
