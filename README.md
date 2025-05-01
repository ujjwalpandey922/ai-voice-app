# Ask the AI - Voice Input App

A React application that allows users to interact with AI using voice input while recording their session. Users can ask questions through voice commands and receive AI-generated responses, with the entire interaction being recorded for later review.

## Features

- 🎤 Voice-to-text transcription
- 📹 Session video recording
- 🤖 AI response simulation
- 💾 Session download capability
- 📱 Responsive design

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd voice-ai-interaction-app
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

1. Start the backend server:

```bash
npm run server
```

2. In a new terminal, start the frontend development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Usage

1. Click "Start New Session" on the welcome page
2. Grant camera and microphone permissions when prompted
3. Click the microphone button to start speaking
4. Your speech will be transcribed in real-time
5. Click "Submit" to send your question to the AI
6. View the AI's response
7. Click "End Session" when finished
8. Download your session recording
9. Start a new session if desired

## Technical Stack

- Frontend:

  - React
  - TypeScript
  - Tailwind CSS
  - Lucide React (icons)
  - Web Speech API
  - MediaRecorder API

- Backend:
  - Express.js
  - CORS

## Browser Compatibility

This application requires modern browser features:

- WebRTC (camera access)
- MediaRecorder API
- Web Speech API

Recommended browsers:

- Google Chrome (latest)
- Microsoft Edge (latest)
- Firefox (latest)

## Privacy Notice

This application requires:

- Camera access
- Microphone access
- Browser speech recognition

All processing is done locally, and recordings are stored only on your device.
