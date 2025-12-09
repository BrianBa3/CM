import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';

const BirthdayMessage: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with gradient and mesh pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-pink-100 opacity-80"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-brand-300 opacity-50 animate-pulse">
        <Sparkles size={48} />
      </div>
      <div className="absolute bottom-10 right-10 text-pink-300 opacity-50 animate-bounce divide-fuchsia-200">
        <Heart size={48} fill="currentColor" />
      </div>
       <div className="absolute top-1/2 right-12 text-yellow-300 opacity-40">
        <Star size={32} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/50"
        >
          <h2 className="font-script text-5xl md:text-6xl text-brand-600 mb-8 leading-tight">
            ¡Feliz Cumpleaños!
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 font-light leading-relaxed">
            <p>
              Hoy celebramos no solo el día en que naciste, sino el regalo increíble que eres para el mundo y para mí.
              Eres luz, alegría y esa risa contagiosa que ilumina incluso los días más grises.
            </p>
            <p>
              Deseo que este nuevo año de vida te traiga tantas sonrisas como las que tú nos regalas,
              tantos sueños cumplidos como estrellas hay en el cielo, y todo el amor que te mereces (que es infinito).
            </p>
            <p className="font-medium text-brand-500 pt-4">
              Gracias por ser mi mejor amiga, mi confidente y mi compañera de aventuras. 
              ¡Que sea un día mágico! ✨
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
             <span className="text-4xl">🎂</span>
             <span className="text-4xl">🎈</span>
             <span className="text-4xl">🎁</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayMessage;
