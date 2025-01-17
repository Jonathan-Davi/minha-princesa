import React from 'react';
import Timer from './components/Timer/Timer.jsx';
import Casal from './components/casal/Casal.jsx';
import Titulo from './components/titulo/Titulo.jsx';
import Carrossel from './components/carrossel/Carrossel.jsx';
import './App.css'; // Importando o arquivo CSS

const App = () => {
  const startDate = new Date('2024-05-13T00:00:00');

  return (
    <div className="app-background">
      <div className="container">
        <div className="top-section">
          <Titulo />
        </div>
        <div className="middle-section">
          <Carrossel />
        </div>
        <div className="bottom-section">
          <Timer startDate={startDate} />
        </div>
        <Casal />
      </div>
    </div>
  );
};

export default App;