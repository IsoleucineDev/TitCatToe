import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface DeleteModalProps {
  isOpen: boolean;
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteModal({ isOpen, itemName, onConfirm, onCancel }: DeleteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.05" /%3E%3C/svg%3E")',
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: 'spring', damping: 15 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white border-8 border-black p-8 max-w-md w-full shadow-2xl"
          >
            {/* Sad Cat Icon */}
            <motion.div
              animate={{
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-8xl text-center mb-4"
            >
              😿
            </motion.div>

            {/* Title */}
            <h2
              className="text-4xl text-center mb-4 text-[#FF2D8A]"
              style={{ fontFamily: 'Abril Fatface, serif' }}
            >
              ¿ESTÁS SEGURO?
            </h2>

            {/* Message */}
            <p className="text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Vas a eliminar a <strong>{itemName}</strong>. Esta acción no se puede deshacer.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onConfirm}
                className="flex-1 bg-[#FF2D8A] text-white py-3 px-6 border-4 border-black font-bold text-lg"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                SÍ, ELIMINAR
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCancel}
                className="flex-1 bg-white text-black py-3 px-6 border-4 border-black font-bold text-lg hover:bg-gray-100"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                CANCELAR
              </motion.button>
            </div>

            {/* Pulsing X */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="absolute -top-4 -right-4 bg-[#FF2D8A] w-12 h-12 rounded-full border-4 border-black flex items-center justify-center cursor-pointer"
              onClick={onCancel}
            >
              <X size={24} color="white" strokeWidth={3} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
