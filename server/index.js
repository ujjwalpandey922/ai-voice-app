import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock AI responses
const mockResponses = [
  "Based on my analysis, I believe the answer to your question is that technology continues to evolve at an exponential rate, transforming how we interact with the world around us.",
  "That's an interesting question. From my understanding, human creativity and artificial intelligence can work together to solve complex problems in innovative ways.",
  "According to my knowledge, the future of renewable energy looks promising, with advancements in solar and wind technology making sustainable solutions more accessible.",
  "I've processed your question, and it seems that the relationship between data privacy and technological advancement requires careful balance to protect individual rights.",
  "After considering your inquiry, I would suggest that learning is a lifelong journey that requires curiosity, persistence, and an open mind.",
  "My analysis indicates that effective communication remains the foundation of successful relationships, both personal and professional.",
  "Based on available information, I can tell you that diverse perspectives often lead to more robust and innovative solutions to complex problems.",
  "From what I understand, maintaining a healthy work-life balance is essential for long-term well-being and productivity.",
  "I've examined your question, and it appears that adapting to change is becoming an increasingly valuable skill in our rapidly evolving world.",
  "My response to your inquiry is that collaboration across disciplines often leads to the most groundbreaking discoveries and innovations."
];

// Ask endpoint
app.post('/ask', (req, res) => {
  const { question } = req.body;
  
  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }
  
  // Add minimum 2-second delay to simulate AI processing
  setTimeout(() => {
    // Select a random response from the mock responses
    const randomIndex = Math.floor(Math.random() * mockResponses.length);
    const answer = mockResponses[randomIndex];
    
    res.json({ answer });
  }, 2000 + Math.random() * 1000); // 2-3 second delay
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});