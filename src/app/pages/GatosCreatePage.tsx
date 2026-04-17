import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Camera, Save, X, Upload } from 'lucide-react';
import { useNavigate } from 'react-router';
import { store } from '../store';
import { Cat } from '../types';
import { toast } from 'sonner';

export function GatosCreatePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: 1,
    breed: '',
    health_status: 'healthy' as Cat['health_status'],
    arrival_date: new Date().toISOString().split('T')[0],
    description: '',
    photo: '',
    adopted: false,
  });

  const [showWelcome, setShowWelcome] = useState(false);

  const RotatingStar = () => (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      className="inline-block"
    >
      <Star size={32} fill="#E8FF00" color="#0A0A0A" />
    </motion.span>
  );

  const BouncingCamera = () => (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Camera size={48} color="#0033FF" />
    </motion.div>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCat = store.createCat(formData);
    
    // Show welcome animation
    setShowWelcome(true);
    setTimeout(() => {
      toast.success(`¡${newCat.name} ha sido agregado al albergue!`);
      navigate('/gatos');
    }, 2000);
  };

  return (
    <div className="p-8 relative">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-3 mb-8"
      >
        <RotatingStar />
        <h1
          className="text-5xl"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          NUEVO MICHI
        </h1>
        <RotatingStar />
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
            placeholder="Ej: Luna"
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
              placeholder="Ej: Siamés"
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
            placeholder="Cuéntanos sobre este michi..."
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label
            className="block mb-3 text-sm font-bold tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            FOTO
          </label>
          <div className="border-4 border-dashed border-black p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
            <BouncingCamera />
            <p className="mt-4 font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Arrastra la foto de tu michi aquí
            </p>
            <p className="text-sm text-gray-600 mt-2">o pega la URL de la imagen</p>
            <input
              type="url"
              value={formData.photo}
              onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
              className="w-full mt-4 px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-[#E8FF00]"
              placeholder="https://ejemplo.com/foto.jpg"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-[#E8FF00] text-black py-4 px-6 border-4 border-black font-bold text-xl flex items-center justify-center gap-2"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            <Save size={24} />
            GUARDAR MICHI ✓
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
      </form>

      {/* Welcome Stamp Animation */}
      {showWelcome && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div className="bg-[#E8FF00] text-black px-12 py-8 border-8 border-black rotate-12 shadow-2xl">
            <p
              className="text-4xl text-center"
              style={{ fontFamily: 'Abril Fatface, serif' }}
            >
              ¡BIENVENIDO
              <br />
              AL ALBERGUE!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
