import { motion } from 'motion/react';
import { Link } from 'react-router';
import { BookOpen, ArrowRight } from 'lucide-react';
import { articles } from '../data/mockData';

export function RevistaSection() {
  return (
    <section id="revista" className="py-16 px-8">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <BookOpen size={40} color="#FF2D8A" />
          </motion.div>
          <h2
            className="text-5xl"
            style={{ fontFamily: 'Abril Fatface, serif', color: '#0A0A0A' }}
          >
            REVISTA / MAGAZINE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.slice(0, 2).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white border-6 border-black p-6 group"
            >
              {/* Editorial Number */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 bg-[#FF2D8A] border-4 border-black rounded-full flex items-center justify-center rotate-12"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', color: 'white' }}
              >
                No. {String(i + 1).padStart(2, '0')}
              </div>

              {/* Category Sticker */}
              <div
                className="inline-block bg-[#E8FF00] px-3 py-1 border-2 border-black mb-3 rotate-[-2deg]"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '12px' }}
              >
                {article.category}
              </div>

              {/* Title */}
              <h3
                className="text-2xl mb-3 relative"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {article.title}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-[#E8FF00]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </h3>

              {/* Preview */}
              <p
                className="text-sm mb-4 line-clamp-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {article.content}
              </p>

              {/* User ID */}
              <div
                className="text-xs mb-4"
                style={{ fontFamily: 'Inter, sans-serif', color: '#717182' }}
              >
                Por: Voluntario #{article.user_id}
              </div>

              {/* Read More Button */}
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-black text-[#E8FF00] px-6 py-2 border-2 border-black"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                LEER MÁS →
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Magazine Cover */}
        <motion.div
          initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
          whileInView={{ rotate: 2, scale: 1, opacity: 1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-8 border-black p-8 bg-white shadow-2xl cursor-pointer relative"
        >
          <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#FF2D8A] border-4 border-black rounded-full flex items-center justify-center rotate-12"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', color: 'white' }}
          >
            No. {String(articles.length).padStart(2, '0')}
          </div>

          <div className="inline-block bg-[#E8FF00] px-3 py-1 border-2 border-black mb-3 rotate-[-2deg]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '12px' }}
          >
            Última edición
          </div>

          <h3
            className="text-2xl mb-3 relative"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            Última edición
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-[#E8FF00]"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </h3>

          <p
            className="text-sm mb-4 line-clamp-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Descubre los últimos artículos de nuestra revista.
          </p>

          {/* Link to Articles */}
          <Link to="/articulos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 bg-[#0033FF] text-white px-6 py-3 border-4 border-black font-bold flex items-center justify-center gap-2"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              LEER MÁS ARTÍCULOS
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}