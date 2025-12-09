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
              Hoy, más que solo celebrar un año más, quiero celebrar la maravilla de persona que eres. Dicen que hay personas que brillan con luz propia, y tú eres definitivamente una de ellas. Quiero aprovechar este día para agradecerte, no solo por lo que haces, sino por todo lo que eres.
            </p>
            <p>
              Admiro profundamente esa fuerza tuya, lo trabajadora y responsable que eres, pero sobre todo admiro tu corazón. Eres una mujer llena de sentimientos, cariñosa y con una sensibilidad única que hace que el mundo sea un lugar más bonito. Gracias por preocuparte siempre, por tener esa alma noble que busca el bien de todos y por entregar tu ayuda sin reservas.
            </p>
            <p>
              Gracias infinitas por regalarme tu amistad este par de años. Coincidir contigo ha sido uno de los regalos más bonitos que me ha dado la vida. Me la he pasado increíble a tu lado y, sinceramente, espero que la vida nunca nos lleve por caminos separados, porque personas como tú son las que uno quiere cuidar y conservar para siempre. Prometo que siempre que mires a tu lado, ahí estaré para apoyarte.
            </p>
            <p>
              Te deseo que en este nuevo rumbo que está tomando tu vida encuentres todo el éxito que anhelas. Que tus metas sean tan grandes como tu corazón y que el universo te devuelva multiplicado todo el amor que das. No tengas miedo de los momentos difíciles, recuerda que las nubes son pasajeras, pero el cielo siempre queda; lo malo pasará y la vida te dará lo mejor, simplemente porque te mereces el cielo entero.
            </p>
            <p>
              Nunca olvides lo valiosa que eres. Como tú no hay dos; eres una edición limitada, eres literalmente una en un millón. Te deseo toda la felicidad del mundo hoy y siempre.
            </p>
            <p className="font-medium text-brand-500 pt-4">
              Gracias por ser mi amiga, mi confidente y mi compañera de aventuras.✨
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
