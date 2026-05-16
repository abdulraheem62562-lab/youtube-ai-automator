import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import JokeCard from './components/JokeCard';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState([]);

  const API_BASE = 'http://localhost:5000'; // Backend server port

  // Fetch random joke
  const fetchRandomJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE}/api/jokes/random`);
      setJoke(response.data);
      addToHistory(response.data);
    } catch (err) {
      setError('Failed to fetch joke. Make sure the backend is running!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Search for jokes
  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE}/api/jokes/search?query=${query}`);
      setJoke(response.data.results || response.data);
      setSearchQuery('');
      addToHistory(response.data.results || response.data);
    } catch (err) {
      setError(`No jokes found for "${query}"`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch joke by category
  const fetchJokeByCategory = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE}/api/jokes/type/${category}`);
      setJoke(response.data);
      addToHistory(response.data);
    } catch (err) {
      setError(`Failed to fetch ${category} joke`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Add joke to history
  const addToHistory = (jokeData) => {
    setHistory([jokeData, ...history.slice(0, 4)]) // Keep last 5
  };

  // Fetch initial joke on mount
  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🤣 Random Joke Generator</h1>
          <p>Get a laugh every day!</p>
        </header>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Category Buttons */}
        <CategoryButtons onSelectCategory={fetchJokeByCategory} />

        {/* Main Joke Card */}
        <JokeCard joke={joke} loading={loading} error={error} />

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={fetchRandomJoke} disabled={loading}>
            {loading ? '🔄 Loading...' : '😂 Next Joke'}
          </button>
        </div>

        {/* History */}
        {history.length > 1 && (
          <div className="history">
            <h3>📜 Recent Jokes</h3>
            <div className="history-list">
              {history.slice(1).map((h, idx) => (
                <div key={idx} className="history-item" onClick={() => setJoke(h)}>
                  <p>{h.joke || h.setup || '...'}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
