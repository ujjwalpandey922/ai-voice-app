import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Camera, Download, StopCircle } from 'lucide-react';
import CameraView from '../components/CameraView';
import Transcription from '../components/Transcription';
import AIResponse from '../components/AIResponse';
import RecordingIndicator from '../components/RecordingIndicator';

interface SessionPageProps {
  onEndSession: () => void;
}

const SessionPage: React.FC<SessionPageProps> = ({ onEndSession }) => {
  // State management
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [aiResponse, setAIResponse] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);
  
  // Refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<BlobPart[]>([]);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Initialize camera and recording on component mount
  useEffect(() => {
    startCamera();
    return () => {
      cleanup();
    };
  }, []);

  // Start camera and prepare recording
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      streamRef.current = stream;
      
      // Initialize MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: 'video/webm'
        });
        
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setRecordingBlob(blob);
      };
      
      // Start recording
      mediaRecorder.start();
      setIsRecording(true);
      
      // Initialize speech recognition
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onresult = (event) => {
          let currentTranscript = '';
          for (let i = 0; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              currentTranscript += event.results[i][0].transcript + ' ';
            }
          }
          setTranscript(currentTranscript);
        };
        
        recognitionRef.current = recognition;
      } else {
        console.error('Speech recognition not supported');
      }
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  // Toggle microphone listening state
  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  // Start listening for voice input
  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
      setTranscript('');
    }
  };

  // Stop listening for voice input
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Submit transcript to backend
  const submitTranscript = async () => {
    if (!transcript.trim() || isProcessing) return;
    
    setIsProcessing(true);
    
    try {
      const response = await fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: transcript })
      });
      
      const data = await response.json();
      setAIResponse(data.answer);
      setTranscript(''); // Clear the transcript after receiving response
    } catch (error) {
      console.error('Error submitting transcript:', error);
      setAIResponse("I'm sorry, I couldn't process your request. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // End session and stop recording
  const handleEndSession = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (isListening) {
        stopListening();
      }
    }
  };

  // Return to welcome page
  const finishSession = () => {
    cleanup();
    onEndSession();
  };

  // Clean up resources
  const cleanup = () => {
    // Stop speech recognition
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // Ignore errors when stopping recognition
      }
    }
    
    // Stop media recorder
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {
        // Ignore errors when stopping media recorder
      }
    }
    
    // Stop all tracks from the stream
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach(track => {
        track.stop();
        streamRef.current?.removeTrack(track);
      });
      streamRef.current = null;
    }
    
    // Clean up download URL
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }
    
    // Reset state
    setIsRecording(false);
    setIsListening(false);
    setTranscript('');
    setAIResponse('');
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ask the AI</h1>
        <div className="flex items-center gap-2">
          <RecordingIndicator isRecording={isRecording} />
          {isRecording ? (
            <button
              onClick={handleEndSession}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full flex items-center gap-1 transition-colors"
            >
              <StopCircle size={18} />
              End Session
            </button>
          ) : null}
        </div>
      </header>
      
      <main className="flex-1 flex flex-col md:flex-row gap-4 p-4">
        <div className="md:w-1/2 space-y-4">
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <CameraView />
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={toggleListening}
              disabled={!isRecording}
              className={`${
                isListening
                  ? 'bg-purple-600 hover:bg-purple-700 animate-pulse'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 transition-all ${
                !isRecording ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isListening ? <Mic size={20} /> : <MicOff size={20} />}
              {isListening ? 'Listening...' : 'Start Speaking'}
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex flex-col gap-4">
          <Transcription 
            text={transcript} 
            isListening={isListening}
            onSubmit={submitTranscript}
            disabled={isProcessing}
          />
          
          <AIResponse 
            response={aiResponse} 
            isProcessing={isProcessing}
          />
        </div>
      </main>
      
      {downloadUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Session Complete</h2>
            <p className="mb-6">
              Your session has been recorded. You can download the video file below.
            </p>
            
            <div className="flex flex-col gap-4">
              <a
                href={downloadUrl}
                download="ai-session-recording.webm"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={20} />
                Download Recording
              </a>
              
              <button
                onClick={finishSession}
                className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-full transition-colors"
              >
                Start New Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionPage;