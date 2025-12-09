import React from 'react';
import { Quote, Heart, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { FRIEND_NAME } from '../constants';

const DedicationSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-brand-50 opacity-80 -z-10"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl border border-brand-200 relative"
        >
          {/* Decorative Icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-500 text-white p-4 rounded-full shadow-lg">
            <Heart size={32} fill="currentColor" />
          </div>

          <div className="text-center mb-10 mt-6">
            <h2 className="font-script text-5xl md:text-6xl text-brand-700 mb-2">Para ti, {FRIEND_NAME}</h2>
            <div className="h-1 w-24 bg-brand-300 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 text-center leading-relaxed font-light">
            <Quote className="inline-block w-8 h-8 text-brand-300 rotate-180 mb-4 opacity-50" />

            <p className="mb-6 text-xl">
              Hay cosas que a veces damos por sentado y no decimos lo suficiente, pero hoy quiero que lo leas y lo guardes en tu corazón.
            </p>

            <p className="mb-6">
              Eres una mujer <strong>increíble, valiente y absolutamente maravillosa</strong>. Tienes una luz especial que hace que la vida de quienes te rodean sea mejor simplemente porque tú estás en ella. Admiro tu fuerza y esa forma única que tienes de ser.
            </p>

            <p className="mb-6">
              En este cumpleaños, te deseo lo más bonito que la vida pueda ofrecer. Pero más allá de los deseos, quiero hacerte una promesa: <strong>siempre que me necesites, estaré aquí para ti</strong>. No importa la hora, el motivo o la distancia, siempre tendrás en mí un apoyo incondicional.
            </p>

            <p className="font-medium text-brand-800 text-2xl italic">
              "Que sepas que si la vida te ha dado momentos difíciles, el universo ya está trabajando para devolvértelo multiplicado por 100 en bendiciones y alegría pura. El karma bueno existe y tú eres quien más lo merece."
            </p>

            <Quote className="inline-block w-8 h-8 text-brand-300 mb-4 opacity-50 mt-6" />
          </div>

          <div className="mt-12 text-center">
            <p className="font-script text-3xl text-gray-500">Con todo mi cariño,</p>
            <p className="font-sans font-bold text-brand-600 mt-2 uppercase tracking-widest text-sm">BRIAN</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DedicationSection;