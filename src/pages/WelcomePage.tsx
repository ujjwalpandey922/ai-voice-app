import React from 'react';
import { Mic } from 'lucide-react';

interface WelcomePageProps {
  onStartSession: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStartSession }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Ask the AI
        </h1>
        
        <p className="text-lg text-gray-300">
          Interact with AI using your voice and record your session
        </p>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md mx-auto">
          <p className="mb-6 text-gray-300">
            Click the button below to start a new session. 
            This will activate your camera and allow you to ask questions using your voice.
          </p>
          
          <button
            onClick={onStartSession}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-full w-full transition-all duration-300 transform hover:scale-105"
          >
            <Mic size={20} />
            Start New Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;