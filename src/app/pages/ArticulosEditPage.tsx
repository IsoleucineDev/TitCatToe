import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Edit, Save, X, Trash2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { store } from '../store';
import { Article } from '../types';
import { toast } from 'sonner';
import { DeleteModal } from '../components/crud/DeleteModal';

export function ArticulosEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    user_id: '',
  });
  const [showBurst, setShowBurst] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    if (id) {
      const foundArticle = store.getArticle(id);
      if (foundArticle) {
        setArticle(foundArticle);
        setFormData({
          title: foundArticle.title,
          content: foundArticle.content,
          user_id: foundArticle.user_id,
        });
      } else {
        toast.error('Artículo no encontrado');
        navigate('/articulos');
      }
    }
  }, [id, navigate]);

  const StarBurst = () => (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: [0, 1.5, 1], rotate: [0, 180, 360] }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((i * Math.PI * 2) / 8) * 100,
            y: Math.sin((i * Math.PI * 2) / 8) * 100,
          }}
          transition={{ duration: 1, delay: i * 0.05 }}
          className="absolute top-1/2 left-1/2"
        >
          <Star size={40} fill="#E8FF00" color="#0A0A0A" />
        </motion.div>
      ))}
    </motion.div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (id) {
      const preview = formData.content.substring(0, 150) + (formData.content.length > 150 ? '...' : '');
      store.updateArticle(id, {
        ...formData,
        preview,
      });
      
      // Show star burst
      setShowBurst(true);
      setTimeout(() => {
        setShowBurst(false);
        toast.success(`¡Artículo "${formData.title}" actualizado!`);
        navigate('/articulos');
      }, 1500);
    }
  };

  const handleDelete = () => {
    if (id) {
      store.deleteArticle(id);
      toast.success(`Artículo "${formData.title}" ha sido eliminado`);
      navigate('/articulos');
    }
  };

  if (!article) {
    return (
      <div className="p-8 text-center">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="p-8 relative">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-3 mb-8"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Edit size={32} color="#0033FF" />
        </motion.div>
        <h1
          className="text-5xl"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          EDITAR ARTÍCULO
        </h1>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label
            className="block mb-2 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            TÍTULO
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-4 border-4 border-black text-2xl focus:outline-none focus:border-[#E8FF00] transition-colors"
            style={{ fontFamily: 'Abril Fatface, serif' }}
          />
        </div>

        {/* Content */}
        <div>
          <label
            className="block mb-2 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            CONTENIDO
          </label>
          <div className="relative">
            {/* Magazine-style lined background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="h-[2.5rem] border-b border-gray-300"
                />
              ))}
            </div>
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={15}
              className="relative w-full px-4 py-3 border-4 border-black text-lg focus:outline-none focus:border-[#E8FF00] transition-colors resize-none bg-white/80"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '2.5rem' }}
            />
          </div>
        </div>

        {/* User Badge */}
        <div className="bg-gray-100 border-2 border-black p-4">
          <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            <strong>Autor:</strong> Voluntario #{formData.user_id}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-[#0033FF] text-white py-4 px-6 border-4 border-black font-bold text-xl flex items-center justify-center gap-2"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <Save size={24} />
            ACTUALIZAR ✓
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/articulos')}
            className="bg-white text-black py-4 px-6 border-4 border-black font-bold text-xl hover:bg-gray-100"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            CANCELAR
          </motion.button>
        </div>

        {/* Delete Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDeleteModal(true)}
          className="w-full bg-[#FF2D8A] text-white py-2 px-4 border-2 border-black font-bold text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          <Trash2 size={16} />
          ELIMINAR ARTÍCULO
        </motion.button>
      </form>

      {/* Star Burst Animation */}
      {showBurst && <StarBurst />}

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal}
        itemName={formData.title}
        onConfirm={handleDelete}
        onCancel={() => setDeleteModal(false)}
      />
    </div>
  );
}
