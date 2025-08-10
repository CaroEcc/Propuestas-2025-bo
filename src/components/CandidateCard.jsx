import React from 'react';
import { motion } from 'framer-motion';

const CandidateCard = ({ candidate, onHover }) => (
  <motion.div
    className="w-full h-full bg-white border-4 rounded-xl shadow-lg p-4 cursor-pointer hover:scale-[1.02] transition-transform duration-200 flex flex-col justify-between"
    onMouseEnter={() => onHover(candidate)}
    whileHover={{ scale: 1.02 }}
    style={{
      backgroundColor: candidate.bgColor || '#fff',
      color: candidate.textColor || '#000',
      borderColor: candidate.borderColor || '#ccc',
    }}
  >
    {/* Logo del partido */}
    <div className="flex justify-center mb-2">
      <img
        src={candidate.logoImg}
        alt={`Logo de ${candidate.party}`}
        className="w-40 h-40 object-contain"
      />
    </div>

    {/* Presidente */}
    <div className="text-center mb-2">
      <img
        src={candidate.image}
        alt={candidate.name}
        className="w-54 h-54 object-cover mx-auto mb-2 border border-white shadow"
      />
      <h3 className="text-lg font-semibold uppercase">{candidate.name}</h3>
      <h3 className="text-lg font-bold uppercase">{candidate.puesto}</h3>
    </div>

    <div className="border-t border-dashed border-gray-300 my-2"></div>

    {/* Vicepresidente */}
    <div className="text-center mt-2">
      <img
        src={candidate.vicepresidente.image}
        alt={candidate.vicepresidente.name}
        className="w-54 h-54 object-cover mx-auto mb-2 border border-white shadow"
      />
      <h3 className="text-lg font-semibold uppercase">{candidate.vicepresidente.name}</h3>
      <h3 className="text-lg font-bold uppercase">{candidate.vicepresidente.puesto}</h3>
    </div>
  </motion.div>
);

export default CandidateCard;
