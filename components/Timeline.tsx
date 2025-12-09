import React from 'react';
import { Calendar, GraduationCap, Heart, Plane, Sparkles, LucideIcon } from 'lucide-react';
import { TIMELINE_DATA } from '../constants';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Heart,
  Plane,
  Sparkles,
  Calendar // Default
};

const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto bg-brand-50">
      <div className="text-center mb-16">
        <h2 className="font-script text-5xl text-brand-700 mb-4">Nuestra Historia</h2>
        <p className="text-gray-600">Pequeños momentos que hicieron una gran amistad.</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-brand-200"></div>

        {TIMELINE_DATA.map((event, index) => {
          const IconComponent = iconMap[event.icon || 'Calendar'] || Calendar;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center justify-between mb-16 ${isEven ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-5/12"></div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-brand-500 text-white z-10 border-4 border-brand-50 shadow-md">
                <IconComponent size={18} />
              </div>

              <div className="w-5/12">
                <div className="bg-white p-4 rounded-xl shadow-md border-b-4 border-brand-300 hover:shadow-xl transition-shadow duration-300 overflow-hidden">

                  {/* Image area */}
                  {event.image && (
                    <div className="w-full mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto max-h-[400px] object-contain transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <span className="block text-brand-500 font-bold text-sm mb-1">{event.year}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;