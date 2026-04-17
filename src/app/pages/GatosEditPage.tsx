import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Edit, Camera, Save, X, Trash2, Heart } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { store } from '../store';
import { Cat } from '../types';
import { toast } from 'sonner';
import { DeleteModal } from '../components/crud/DeleteModal';

export function GatosEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cat, setCat] = useState<Cat | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    age: 1,
    breed: '',
    health_status: 'healthy' as Cat['health_status'],
    arrival_date: '',
    description: '',
    photo: '',
    adopted: false,
  });
  const [showHeart, setShowHeart] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    if (id) {
      const foundCat = store.getCat(id);
      if (foundCat) {
        setCat(foundCat);
        setFormData({
          name: foundCat.name,
          age: foundCat.age,
          breed: foundCat.breed,
          health_status: foundCat.health_status,
          arrival_date: foundCat.arrival_date,
          description: foundCat.description || '',
          photo: foundCat.photo || '',
          adopted: foundCat.adopted || false,
        });
      } else {
        toast.error('Gato no encontrado');
        navigate('/gatos');
      }
    }
  }, [id, navigate]);

  const RotatingEdit = () => (
    <motion.span
      animate={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="inline-block"
    >
      <Edit size={32} color="#0033FF" />
    </motion.span>
  );

  const PulsingHeart = () => (
    <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 0.6, repeat: 2 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
    >
      <Heart size={120} fill="#FF2D8A" color="#FF2D8A" />
    </motion.div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (id) {
      store.updateCat(id, formData);
      
      // Show pulsing heart
      setShowHeart(true);
      setTimeout(() => {
        setShowHeart(false);
        toast.success(`¡${formData.name} ha sido actualizado!`);
        navigate('/gatos');
      }, 2000);
    }
  };

  const handleDelete = () => {
    if (id) {
      store.deleteCat(id);
      toast.success(`${formData.name} ha sido eliminado`);
      navigate('/gatos');
    }
  };

  if (!cat) {
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
        <RotatingEdit />
        <h1
          className="text-5xl"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          EDITAR MICHI
        </h1>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            className="block mb-2 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            NOMBRE
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border-4 border-black text-lg focus:outline-none focus:border-[#E8FF00] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        {/* Age and Breed */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="block mb-2 text-sm font-bold tracking-wide"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              EDAD (años)
            </label>
            <input
              type="number"
              required
              min="0"
              max="25"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
              className="w-full px-4 py-3 border-4 border-black text-lg focus:outline-none focus:border-[#E8FF00] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-bold tracking-wide"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              RAZA
            </label>
            <input
              type="text"
              required
              value={formData.breed}
              onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
              className="w-full px-4 py-3 border-4 border-black text-lg focus:outline-none focus:border-[#E8FF00] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Health Status */}
        <div>
          <label
            className="block mb-3 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            ESTADO DE SALUD
          </label>
          <div className="flex gap-3">
            {[
              { value: 'healthy', label: 'SANO', color: '#39FF14' },
              { value: 'treatment', label: 'EN TRATAMIENTO', color: '#E8FF00' },
              { value: 'critical', label: 'CRÍTICO', color: '#FF2D8A' },
            ].map((status) => (
              <motion.button
                key={status.value}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFormData({ ...formData, health_status: status.value as Cat['health_status'] })}
                className={`flex-1 py-3 px-4 border-4 border-black font-bold transition-all ${
                  formData.health_status === status.value ? '' : 'opacity-50'
                }`}
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  backgroundColor: formData.health_status === status.value ? status.color : 'white',
                  color: formData.health_status === status.value && status.value !== 'critical' ? 'black' : formData.health_status === status.value ? 'white' : 'black',
                }}
              >
                {status.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Arrival Date */}
        <div>
          <label
            className="block mb-2 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            FECHA DE LLEGADA
          </label>
          <input
            type="date"
            required
            value={formData.arrival_date}
            onChange={(e) => setFormData({ ...formData, arrival_date: e.target.value })}
            className="w-full px-4 py-3 border-4 border-black text-lg focus:outline-none focus:border-[#E8FF00] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        {/* Adopted Status */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.adopted}
              onChange={(e) => setFormData({ ...formData, adopted: e.target.checked })}
              className="w-6 h-6 border-4 border-black"
            />
            <span
              className="text-lg font-bold"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              ADOPTADO
            </span>
          </label>
        </div>

        {/* Description */}
        <div>
          <label
            className="block mb-2 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            DESCRIPCIÓN
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border-4 border-black text-lg focus:outline-none focus:border-[#E8FF00] transition-colors resize-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        {/* Photo */}
        <div>
          <label
            className="block mb-3 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            FOTO
          </label>
          {formData.photo && (
            <div className="mb-4 relative group">
              <div className="w-full h-48 border-4 border-black overflow-hidden">
                <img src={formData.photo} alt={formData.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera size={48} color="white" />
              </div>
            </div>
          )}
          <input
            type="url"
            value={formData.photo}
            onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
            className="w-full px-4 py-2 border-2 border-black focus:outline-none focus:border-[#E8FF00]"
            placeholder="URL de la foto"
          />
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
            onClick={() => navigate('/gatos')}
            className="flex-1 bg-white text-black py-4 px-6 border-4 border-black font-bold text-xl hover:bg-gray-100"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            CANCELAR
          </motion.button>
        </div>

        {/* Delete Button (Small) */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDeleteModal(true)}
          className="w-full bg-[#FF2D8A] text-white py-2 px-4 border-2 border-black font-bold text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          <Trash2 size={16} />
          ELIMINAR GATO
        </motion.button>
      </form>

      {/* Pulsing Heart Animation */}
      {showHeart && <PulsingHeart />}

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModal}
        itemName={formData.name}
        onConfirm={handleDelete}
        onCancel={() => setDeleteModal(false)}
      />
    </div>
  );
}
