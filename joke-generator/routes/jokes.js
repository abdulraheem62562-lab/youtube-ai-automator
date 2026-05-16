import express from 'express';
import { getRandomJoke, searchJokes, getJokeByType } from '../services/jokeService.js';

const router = express.Router();

// Get a random joke
router.get('/random', async (req, res) => {
  try {
    const joke = await getRandomJoke();
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search jokes by keyword
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Please provide a search query' });
    }
    const results = await searchJokes(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get jokes by type (general, knock-knock, programming)
router.get('/type/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const joke = await getJokeByType(type);
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
