import React from 'react';
import { FileText, Send } from 'lucide-react';

interface TranscriptionProps {
  text: string;
  isListening: boolean;
  onSubmit: () => void;
  disabled: boolean;
}

const Transcription: React.FC<TranscriptionProps> = ({ text, isListening, onSubmit, disabled }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 flex-1">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-blue-400" />
          <h2 className="font-semibold">Transcription</h2>
        </div>
        {text && !isListening && (
          <button
            onClick={onSubmit}
            disabled={disabled}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${
              disabled 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Send size={14} />
            Submit
          </button>
        )}
      </div>
      
      <div className="min-h-32 max-h-64 overflow-y-auto bg-gray-900 rounded-lg p-3">
        {text ? (
          <p className="whitespace-pre-wrap">{text}</p>
        ) : (
          <div className="text-gray-500 italic">
            {isListening 
              ? "Listening... Start speaking" 
              : "Click the microphone button and start speaking"}
          </div>
        )}
        {isListening && (
          <div className="inline-block w-2 h-4 ml-1 bg-blue-500 animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default Transcription