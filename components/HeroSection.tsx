import React, { useState } from 'react';
import { Heart, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { FRIEND_NAME, HERO_IMAGE } from '../constants';

const HeroSection: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCelebrate = () => {
    setShowConfetti(true);
    // Reset simple animation trigger
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-400/30 text-yellow-50 backdrop-blur-md border border-yellow-200/40 text-sm tracking-wider uppercase font-semibold">
            🌻 Hoy todo es amarillo para ti 🌻
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-7xl md:text-9xl text-yellow-100 drop-shadow-lg mb-2"
        >
          Felices 27
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans font-bold text-5xl md:text-7xl text-white drop-shadow-md mb-8"
        >
          {FRIEND_NAME}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/95 text-lg md:text-xl max-w-lg mb-10 font-light"
        >
          Eres la prueba de que en casi 3 años se puede construir una amistad para toda la vida. Que tu día brille tanto como tus flores favoritas.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCelebrate}
          className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full text-white font-semibold shadow-lg shadow-yellow-500/40 overflow-hidden border border-yellow-400/50"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sun className="w-5 h-5" />
            ¡Lluvia de Flores!
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </motion.button>
      </div>

      {/* Flower Petal Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, x: Math.random() * 100 + "%", rotate: 0, opacity: 0 }}
              animate={{
                y: "110vh",
                rotate: 360,
                x: `${(Math.random() - 0.5) * 50}%`, // Swaying motion
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                ease: "easeInOut",
                delay: Math.random() * 0.5
              }}
              className="absolute w-6 h-6 rounded-full"
              style={{
                backgroundColor: ['#FCD34D', '#F59E0B', '#FEF3C7', '#FBBF24'][Math.floor(Math.random() * 4)],
                borderRadius: '50% 0 50% 0', // Petal shape
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-50 to-transparent z-20"></div>
    </div>
  );
};

export default HeroSection;