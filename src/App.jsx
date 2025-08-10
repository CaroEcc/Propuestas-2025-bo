import React, { useState } from 'react';
import candidates from './data/candidates';
import CandidateCard from './components/CandidateCard';
import CandidateModal from './components/CandidateModal';

const App = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (candidate) => {
    setSelectedCandidate(candidate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Promesas Electorales - Papeleta Electoral - Bolivia 2025
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onHover={openModal}
          />
        ))}
      </div>

      <CandidateModal
        isOpen={modalOpen}
        onClose={closeModal}
        candidate={selectedCandidate}
      />
    </div>
  );
};

export default App;
