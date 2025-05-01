import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import SessionPage from './pages/SessionPage';

function App() {
  const [sessionActive, setSessionActive] = useState<boolean>(false);
  
  const startSession = () => {
    setSessionActive(true);
  };
  
  const endSession = () => {
    setSessionActive(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {sessionActive ? (
        <SessionPage onEndSession={endSession} />
      ) : (
        <WelcomePage onStartSession={startSession} />
      )}
    </div>
  );
}

export default App;