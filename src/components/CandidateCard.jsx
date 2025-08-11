// CandidateCard.jsx
import React from 'react';

const CandidateCard = ({ candidate, onHover }) => (
  <div
    className="w-full h-full border-4 rounded-xl shadow-lg cursor-pointer overflow-hidden hover:scale-[1.02] transition-transform duration-200"
    onMouseEnter={() => onHover(candidate)}
    style={{
      borderColor: candidate.borderColor || '#ccc',
    }}
  >
    <img
      src={candidate.bgImage || '/images/default-background.jpg'}
      alt={candidate.name || 'Candidate'}
      className="w-40 h-40 object-cover"
    />
  </div>
);

export default CandidateCard;
