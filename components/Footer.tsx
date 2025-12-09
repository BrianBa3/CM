import React from 'react';
import { Heart } from 'lucide-react';
import { MY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white text-center border-t border-gray-100">
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <span>Hecho con mucho</span>
        <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
        <span>por {MY_NAME}</span>
      </div>
      <p className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;