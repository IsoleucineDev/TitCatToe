import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, PenLine } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { ArticleCard } from '../components/crud/ArticleCard';
import { DeleteModal } from '../components/crud/DeleteModal';
import { store } from '../store';
import { Article } from '../types';
import { toast } from 'sonner';

export function ArticulosListPage() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>(store.getArticles());
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; article: Article | null }>({
    isOpen: false,
    article: null,
  });

  const AnimatedPen = () => (
    <motion.span
      animate={{
        rotate: [0, -15, 15, -15, 0],
        y: [0, -2, 0, -2, 0],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="inline-block"
    >
      <PenLine size={32} color="#FF2D8A" />
    </motion.span>
  );

  const handleDelete = (id: string) => {
    const article = articles.find(a => a.id === id);
    if (article) {
      setDeleteModal({ isOpen: true, article });
    }
  };

  const confirmDelete = () => {
    if (deleteModal.article) {
      store.deleteArticle(deleteModal.article.id);
      setArticles(store.getArticles());
      toast.success(`Artículo "${deleteModal.article.title}" ha sido eliminado`);
      setDeleteModal({ isOpen: false, article: null });
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <AnimatedPen />
          <h1
            className="text-5xl"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            REVISTA FELINA
          </h1>
        </div>
        <p className="text-sm italic text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          Historias, consejos y novedades del mundo gatuno
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Empty State */}
      {articles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">📝</div>
          <p className="text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            No hay artículos publicados
          </p>
        </motion.div>
      )}

      {/* Add Button */}
      <Link to="/articulos/create">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#E8FF00] text-black py-4 px-6 border-4 border-black font-bold text-xl flex items-center justify-center gap-2"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          <Plus size={24} />
          NUEVO ARTÍCULO
        </motion.button>
      </Link>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        itemName={deleteModal.article?.title || ''}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal({ isOpen: false, article: null })}
      />
    </div>
  );
}
