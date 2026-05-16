import axios from 'axios';

const JOKEAPI_URL = 'https://v2.jokeapi.dev/joke';

/**
 * Fetch a random joke from JokeAPI
 * Supports: General, Knock-Knock, Programming, Miscellaneous, Dark
 */
export const getRandomJoke = async () => {
  try {
    const response = await axios.get(`${JOKEAPI_URL}/Any?format=json`);
    return formatJoke(response.data);
  } catch (error) {
    throw new Error(`Failed to fetch random joke: ${error.message}`);
  }
};

/**
 * Search for jokes by keyword
 */
export const searchJokes = async (query) => {
  try {
    const response = await axios.get(`${JOKEAPI_URL}/Any?contains=${encodeURIComponent(query)}&format=json`);
    if (response.data.error) {
      return { message: 'No jokes found for that query', results: [] };
    }
    return { query, results: formatJoke(response.data) };
  } catch (error) {
    throw new Error(`Failed to search jokes: ${error.message}`);
  }
};

/**
 * Get jokes by specific type
 * Types: general, knock-knock, programming, miscellaneous, dark
 */
export const getJokeByType = async (type) => {
  const validTypes = ['general', 'knock-knock', 'programming', 'miscellaneous', 'dark'];
  
  if (!validTypes.includes(type)) {
    throw new Error(`Invalid type. Valid types are: ${validTypes.join(', ')}`);
  }

  try {
    const response = await axios.get(`${JOKEAPI_URL}/${type}?format=json`);
    return formatJoke(response.data);
  } catch (error) {
    throw new Error(`Failed to fetch ${type} joke: ${error.message}`);
  }
};

/**
 * Format joke response for cleaner output
 */
const formatJoke = (data) => {
  if (data.error) {
    return { error: true, message: 'No jokes found' };
  }

  if (data.type === 'single') {
    // Single joke format
    return {
      id: data.id,
      type: data.category,
      joke: data.joke,
      isSafe: data.safe,
    };
  } else if (data.type === 'twopart') {
    // Two-part joke format (setup + delivery)
    return {
      id: data.id,
      type: data.category,
      setup: data.setup,
      delivery: data.delivery,
      isSafe: data.safe,
    };
  }

  return data;
};
