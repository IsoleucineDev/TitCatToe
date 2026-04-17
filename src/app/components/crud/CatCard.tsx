import { motion } from 'motion/react';
import { Edit, Trash2, Heart } from 'lucide-react';
import { Cat } from '../../types';
import { Link } from 'react-router';

interface CatCardProps {
  cat: Cat;
  onDelete: (id: string) => void;
}

export function CatCard({ cat, onDelete }: CatCardProps) {
  const healthColors = {
    healthy: '#39FF14',
    treatment: '#E8FF00',
    critical: '#FF2D8A',
  };

  const healthLabels = {
    healthy: 'SANO',
    treatment: 'TRATAMIENTO',
    critical: 'CRÍTICO',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative bg-white border-4 border-black p-4 shadow-lg hover:shadow-2xl transition-all group"
    >
      {/* Status Sticker */}
      {cat.adopted ? (
        <div className="absolute top-4 right-4 z-10 bg-[#FF2D8A] text-white px-3 py-1 rotate-12 border-2 border-black text-xs font-bold">
          ADOPTADO
        </div>
      ) : (
        <div className="absolute top-4 right-4 z-10 bg-[#E8FF00] text-black px-3 py-1 rotate-12 border-2 border-black text-xs font-bold">
          DISPONIBLE
        </div>
      )}

      {/* Photo */}
      <Link to={`/gatos/${cat.id}`}>
        <div className="w-full h-48 bg-gray-200 border-4 border-black mb-4 overflow-hidden">
          {cat.photo ? (
            <img src={cat.photo} alt={cat.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🐱
            </div>
          )}
        </div>
      </Link>

      {/* Name */}
      <Link to={`/gatos/${cat.id}`}>
        <h3
          className="text-3xl mb-2 hover:text-[#0033FF] transition-colors"
          style={{ fontFamily: 'Abril Fatface, serif' }}
        >
          {cat.name}
        </h3>
      </Link>

      {/* Info Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Breed */}
        <div className="bg-black text-[#E8FF00] px-3 py-1 text-xs font-bold">
          {cat.breed}
        </div>

        {/* Age */}
        <div className="w-8 h-8 rounded-full border-3 border-black flex items-center justify-center font-bold bg-white">
          {cat.age}
        </div>

        {/* Health Status */}
        <div
          className="flex items-center gap-1 px-3 py-1 border-2 border-black text-xs font-bold"
          style={{ backgroundColor: healthColors[cat.health_status] }}
        >
          <Heart size={12} fill="currentColor" />
          {healthLabels[cat.health_status]}
        </div>
      </div>

      {/* Arrival Date */}
      <p className="text-xs text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        Llegó: {new Date(cat.arrival_date).toLocaleDateString('es-ES')}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Link to={`/gatos/${cat.id}/edit`} className="flex-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#0033FF] text-white py-2 px-4 border-2 border-black font-bold flex items-center justify-center gap-2"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <Edit size={16} />
            EDITAR
          </motion.button>
        </Link>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(cat.id)}
          className="flex-1 bg-[#FF2D8A] text-white py-2 px-4 border-2 border-black font-bold flex items-center justify-center gap-2"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          <Trash2 size={16} />
          ELIMINAR
        </motion.button>
      </div>
    </motion.div>
  );
}
