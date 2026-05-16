import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jokeRoutes from './routes/jokes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jokes', jokeRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🤣 Joke Generator API running on http://localhost:${PORT}`);
  console.log(`📝 Get a random joke: http://localhost:${PORT}/api/jokes/random`);
  console.log(`😂 Search jokes: http://localhost:${PORT}/api/jokes/search?query=knock`);
});
