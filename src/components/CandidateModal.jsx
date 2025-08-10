import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CandidateModal = ({ isOpen, onClose, candidate }) => {
  // Cerrar al presionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Cerrar al hacer clic fuera del modal
  const handleBackdropClick = (e) => {
    if (e.target.id === 'backdrop') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && candidate && (
        <motion.div
          id="backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 relative shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Botón de cerrar (X) */}
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              {candidate.name} - Promesas Electorales
            </h2>

            {/* Video de YouTube responsivo */}
            <div className="relative w-full pb-[56.25%] mb-4">
              <iframe
                src={candidate.videoEmbed}
                title={candidate.name}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded"
              />
            </div>

            {/* Botón de cerrar */}
            <div className="text-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CandidateModal;
