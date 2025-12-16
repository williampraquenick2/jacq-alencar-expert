import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ImageData } from '../types';

interface LightboxProps {
  isOpen: boolean;
  image: ImageData | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full"
      >
        <X size={32} />
      </button>
      
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        {image.alt && (
          <p className="mt-4 text-white/90 text-lg font-medium text-center bg-black/50 px-4 py-2 rounded-full">
            {image.alt}
          </p>
        )}
      </div>
    </div>
  );
};