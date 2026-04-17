import { motion } from 'motion/react';
import { Link } from 'react-router';

export function RightColumn() {
  const navItems = [
    { label: 'INICIO', to: '/' },
    { label: 'GATOS', to: '/gatos' },
    { label: 'ARTÍCULOS', to: '/articulos' },
  ];

  return (
    <div className="fixed right-0 top-0 w-48 h-screen z-20 pointer-events-none">
      <div className="h-full flex flex-col justify-between py-16 px-6 pointer-events-auto">
        {/* Navigation Menu */}
        <motion.nav
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <Link to={item.to}>
                <motion.div
                  whileHover={{ x: -5, scale: 1.05 }}
                  className="bg-black text-[#E8FF00] px-4 py-2 text-sm text-center border-2 border-black hover:bg-[#0033FF] transition-colors cursor-pointer"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {item.label}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Decorative Elements */}
        <div className="space-y-8">
          {/* Diagonal Stripes */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 mx-auto"
            style={{
              background: 'repeating-linear-gradient(45deg, #0A0A0A, #0A0A0A 5px, transparent 5px, transparent 10px)',
            }}
          />

          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <div className="inline-block bg-[#FF4500] px-3 py-2 rotate-[-8deg] border-2 border-black">
              <p className="text-xs font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                RESCUE
                <br />
                CATS
              </p>
            </div>
          </motion.div>

          {/* Round Stamp Bottom */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="w-32 h-32 rounded-full border-4 border-[#0033FF] flex items-center justify-center mx-auto"
          >
            <div className="text-center text-[#0033FF] text-xs px-2">
              <div className="font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                TicCatToe
                <br />
                <span className="text-[10px]">RESCATE & AMOR</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
