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
<AnimatePresence mode="wait">
  <motion.div
    key={candidate?.id}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
  >
    <h2 className="text-2xl font-bold text-center mb-4">
      Promesas Electorales
    </h2>
    <div className="relative w-full pb-[56.25%] mb-4">
      <iframe
        src=""
        title=""
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded"
      />
    </div>
  </motion.div>
</AnimatePresence>
  );
};

export default CandidateModal;
