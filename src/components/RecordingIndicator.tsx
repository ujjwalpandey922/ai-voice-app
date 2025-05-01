import React from 'react';
import { SwordIcon as Record } from 'lucide-react';

interface RecordingIndicatorProps {
  isRecording: boolean;
}

const RecordingIndicator: React.FC<RecordingIndicatorProps> = ({ isRecording }) => {
  if (!isRecording) return null;
  
  return (
    <div className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full">
      <Record size={16} className="text-red-500 animate-pulse" />
      <span className="text-sm">Recording</span>
    </div>
  );
};

export default RecordingIndicator;