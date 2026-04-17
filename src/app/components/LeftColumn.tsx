import { motion } from 'motion/react';
import { Link } from 'react-router';
import { BouncingPaw } from './AnimatedIcons';

export function LeftColumn() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="fixed left-0 top-8 bottom-8 w-64 overflow-hidden pointer-events-none"
      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
    >
      {/* Giant Vertical MEOW */}
      <div className="absolute top-20 left-8 flex flex-col gap-4">
        {['M', 'E', 'O', 'W'].map((letter, i) => (
          <motion.div
            key={letter}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="text-[120px] leading-none"
            style={{
              color: i % 2 === 0 ? '#E8FF00' : '#FF2D8A',
              WebkitTextStroke: '3px #0A0A0A',
              paintOrder: 'stroke fill',
            }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      {/* Diagonal Stripes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[15%] left-[-20%] w-[150%] h-12 bg-[#E8FF00] rotate-[-15deg]" />
        <div className="absolute top-[35%] left-[-20%] w-[150%] h-16 bg-[#0033FF] rotate-[12deg]" />
        <div className="absolute top-[55%] left-[-20%] w-[150%] h-10 bg-[#FF2D8A] rotate-[-18deg]" />
        <div className="absolute top-[75%] left-[-20%] w-[150%] h-14 bg-[#39FF14] rotate-[10deg]" />
      </div>

      {/* Shelter Logo */}
      <div className="absolute top-4 left-4 z-10 pointer-events-auto">
        <Link to="/">
          <div className="bg-black text-[#E8FF00] px-3 py-2 rotate-[-3deg] border-4 border-black shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <div className="text-2xl tracking-wider">TicCatToe</div>
            <div className="text-xs">ALBERGUE</div>
          </div>
        </Link>
      </div>

      {/* Cat Paw Stamp */}
      <div className="absolute bottom-20 left-12 text-[#FF2D8A]">
        <BouncingPaw />
      </div>
    </motion.div>
  );
}