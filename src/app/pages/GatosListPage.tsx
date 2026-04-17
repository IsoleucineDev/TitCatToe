import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { CatCard } from '../components/crud/CatCard';
import { DeleteModal } from '../components/crud/DeleteModal';
import { store } from '../store';
import { Cat } from '../types';
import { toast } from 'sonner';

type FilterType = 'all' | 'available' | 'treatment' | 'adopted';

export function GatosListPage() {
  const navigate = useNavigate();
  const [cats, setCats] = useState<Cat[]>(store.getCats());
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; cat: Cat | null }>({
    isOpen: false,
    cat: null,
  });

  // Rotating paw animation component
  const RotatingPaw = () => (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      className="inline-block"
    >
      🐾
    </motion.span>
  );

  // Filter cats
  const filteredCats = cats.filter(cat => {
    // Search filter
    if (search && !cat.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    // Status filter
    if (filter === 'available' && cat.adopted) return false;
    if (filter === 'treatment' && cat.health_status !== 'treatment') return false;
    if (filter === 'adopted' && !cat.adopted) return false;

    return true;
  });

  const handleDelete = (id: string) => {
    const cat = cats.find(c => c.id === id);
    if (cat) {
      setDeleteModal({ isOpen: true, cat });
    }
  };

  const confirmDelete = () => {
    if (deleteModal.cat) {
      store.deleteCat(deleteModal.cat.id);
      setCats(store.getCats());
      toast.success(`${deleteModal.cat.name} ha sido eliminado`);
      setDeleteModal({ isOpen: false, cat: null });
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
        <div className="flex items-center gap-3 mb-6">
          <RotatingPaw />
          <h1
            className="text-5xl"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            NUESTROS MICHIS
          </h1>
          <RotatingPaw />
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Search size={24} />
          </div>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-4 py-4 border-4 border-black text-lg focus:outline-none focus:border-[#E8FF00] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {[
            { key: 'all', label: 'TODOS' },
            { key: 'available', label: 'DISPONIBLES' },
            { key: 'treatment', label: 'EN TRATAMIENTO' },
            { key: 'adopted', label: 'ADOPTADOS' },
          ].map((f) => (
            <motion.button
              key={f.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f.key as FilterType)}
              className={`px-6 py-2 border-3 border-black font-bold transition-all ${
                filter === f.key
                  ? 'bg-[#E8FF00] text-black'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                borderRadius: '20px',
              }}
            >
              {f.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Cats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {filteredCats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onDelete={handleDelete} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCats.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">😿</div>
          <p className="text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            No se encontraron gatos
          </p>
        </motion.div>
      )}

      {/* Floating Add Button */}
      <Link to="/gatos/create">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#E8FF00] border-4 border-black rounded-full shadow-2xl flex items-center justify-center z-40"
        >
          <Plus size={32} strokeWidth={3} />
        </motion.button>
      </Link>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal.isOpen}
        itemName={deleteModal.cat?.name || ''}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal({ isOpen: false, cat: null })}
      />
    </div>
  );
}