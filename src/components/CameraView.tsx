import React, { useEffect, useRef } from 'react';
import { Camera, CameraOff } from 'lucide-react';

const CameraView: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        if (videoRef.current) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
        setError('Camera access was denied or is not available');
      }
    };

    setupCamera();

    // Cleanup function
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (error) {
    return (
      <div className="aspect-video bg-gray-900 flex items-center justify-center text-center p-4 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <CameraOff size={48} className="text-red-500" />
          <p className="text-gray-300">{error}</p>
          <p className="text-sm text-gray-400">
            Please allow camera access and reload the page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-gray-900 flex items-center justify-center relative rounded-lg overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-70 px-2 py-1 rounded-md flex items-center gap-1">
        <Camera size={16} className="text-blue-400" />
        <span className="text-xs">Live</span>
      </div>
    </div>
  );
};

export default CameraView;