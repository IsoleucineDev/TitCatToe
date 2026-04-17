import { motion } from 'motion/react';
import { Heart, Home, Star, Calendar, Pill } from 'lucide-react';

export function BouncingPaw() {
  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="inline-block"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    </motion.div>
  );
}

export function SpinningCatFace() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="inline-block"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    </motion.div>
  );
}

export function PulsingHeart({ color = '#FF2D8A' }: { color?: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className="inline-block"
    >
      <Heart fill={color} color={color} size={20} />
    </motion.div>
  );
}

export function SlidingHouse() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      <Home size={24} />
    </motion.div>
  );
}

export function RotatingStar() {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      className="inline-block"
    >
      <Star fill="#E8FF00" color="#E8FF00" size={20} />
    </motion.div>
  );
}

export function ShakingCalendar() {
  return (
    <motion.div
      whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
      transition={{ duration: 0.5 }}
      className="inline-block cursor-pointer"
    >
      <Calendar size={16} />
    </motion.div>
  );
}

export function BlinkingPill() {
  return (
    <motion.div
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="inline-block"
    >
      <Pill size={16} />
    </motion.div>
  );
}
