import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface AIResponseProps {
  response: string;
  isProcessing: boolean;
}

const AIResponse: React.FC<AIResponseProps> = ({ response, isProcessing }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 flex-1">
      <div className="flex items-center gap-2 mb-2">
        <BrainCircuit size={18} className="text-purple-400" />
        <h2 className="font-semibold">AI Response</h2>
      </div>
      
      <div className="min-h-32 max-h-64 overflow-y-auto bg-gray-900 rounded-lg p-3">
        {isProcessing ? (
          <div className="flex flex-col items-center justify-center h-32 gap-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
            <p className="text-gray-400">Thinking...</p>
          </div>
        ) : response ? (
          <p className="whitespace-pre-wrap">{response}</p>
        ) : (
          <div className="text-gray-500 italic">
            Your AI response will appear here
          </div>
        )}
      </div>
    </div>
  );
};

export default AIResponse;