import React from 'react';
import { GALLERY_DATA } from '../constants';
import { motion } from 'framer-motion';

const PhotoGallery: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-brand-700 mb-4">Recuerdos Inolvidables</h2>
          <p className="text-gray-600">Cada foto cuenta una parte de nuestra aventura.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_DATA.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`relative group cursor-pointer ${photo.rotation} hover:shadow-2xl transition-all duration-300 bg-white p-3 shadow-lg rounded-lg`}
            >
              <div className="overflow-hidden rounded bg-gray-100 aspect-[3/4]">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="pt-4 pb-2 text-center">
                <p className="font-script text-2xl text-gray-700">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;