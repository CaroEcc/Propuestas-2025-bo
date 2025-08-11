// App.jsx
import React, { useState } from 'react';
import candidates from './data/candidates';
import CandidateCard from './components/CandidateCard';
import CandidateModal from './components/CandidateModal';
import papeleta from './assets/papeleta.png';


const App = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleHover = (candidate) => {
    setSelectedCandidate(candidate);
    if (!modalOpen) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <div className="h-screen bg-no-repeat bg-contain bg-center bg-fixed p-3 flex items-center justify-center"  
    style={{ backgroundImage: `url(${papeleta})` }}>

      <div className="grid grid-cols-9 gap-6">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onHover={handleHover}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
