import { motion } from 'motion/react';
import { Edit, Trash2, User } from 'lucide-react';
import { Article } from '../../types';
import { Link } from 'react-router';

interface ArticleCardProps {
  article: Article;
  index: number;
  onDelete: (id: string) => void;
}

export function ArticleCard({ article, index, onDelete }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative bg-white border-4 border-black p-6 shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Editorial Number */}
      <div className="absolute -top-3 -left-3 bg-[#0033FF] text-white w-16 h-16 border-4 border-black flex items-center justify-center rotate-[-5deg]">
        <div className="text-center">
          <p className="text-xs font-bold">No.</p>
          <p className="text-2xl font-bold">{String(index + 1).padStart(2, '0')}</p>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-2xl mb-3 mt-4"
        style={{ fontFamily: 'Abril Fatface, serif' }}
      >
        {article.title}
      </h3>

      {/* Content Preview */}
      <p className="text-sm mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        {article.preview || article.content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
        <div className="w-6 h-6 rounded-full bg-[#E8FF00] border-2 border-black flex items-center justify-center">
          <User size={12} />
        </div>
        <span>Por: Voluntario #{article.user_id}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Link to={`/articulos/${article.id}/edit`} className="flex-1">
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
          onClick={() => onDelete(article.id)}
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
