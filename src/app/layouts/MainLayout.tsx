import { Outlet } from 'react-router';
import { motion } from 'motion/react';
import { FilmStripBorder } from '../components/FilmStripBorder';
import { LeftColumn } from '../components/LeftColumn';
import { RightColumn } from '../components/RightColumn';
import { Toaster } from 'sonner';

export function MainLayout() {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: '#F2F0EB', fontFamily: 'Inter, sans-serif' }}>
      <Toaster position="top-center" />
      
      {/* Film Strip Borders */}
      <FilmStripBorder position="top" />
      <FilmStripBorder position="bottom" />

      {/* Left Decorative Column */}
      <LeftColumn />

      {/* Right Navigation Column */}
      <RightColumn />

      {/* Center Content Column */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-2xl relative z-10"
        style={{
          marginTop: '32px',
          marginBottom: '32px',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        {/* Mobile-frame style container */}
        <div className="bg-white border-8 border-black shadow-2xl overflow-hidden">
          <Outlet />
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed bottom-32 left-[20%] w-24 h-24 bg-[#FF2D8A] rounded-full opacity-20 pointer-events-none z-0"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed top-40 right-[22%] w-32 h-32 bg-[#0033FF] opacity-10 pointer-events-none z-0 transform rotate-45"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed top-[60%] left-[18%] w-16 h-16 bg-[#E8FF00] rounded-full opacity-30 pointer-events-none z-0"
      />
    </div>
  );
}
