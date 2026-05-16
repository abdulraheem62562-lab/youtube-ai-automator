import './JokeCard.css';

function JokeCard({ joke, loading, error }) {
  if (error) {
    return (
      <div className="joke-card error">
        <p>❌ {error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="joke-card loading">
        <div className="spinner"></div>
        <p>Loading a hilarious joke...</p>
      </div>
    );
  }

  if (!joke) {
    return <div className="joke-card">No joke loaded</div>;
  }

  // Single joke format
  if (joke.joke) {
    return (
      <div className="joke-card single">
        <div className="joke-content">
          <p className="joke-text">{joke.joke}</p>
          <div className="joke-meta">
            <span className="category">{joke.type}</span>
            {joke.isSafe && <span className="safe">✅ Safe</span>}
          </div>
        </div>
      </div>
    );
  }

  // Two-part joke format (setup + delivery)
  if (joke.setup && joke.delivery) {
    return (
      <div className="joke-card two-part">
        <div className="joke-content">
          <p className="setup">{joke.setup}</p>
          <p className="delivery">➜ {joke.delivery}</p>
          <div className="joke-meta">
            <span className="category">{joke.type}</span>
            {joke.isSafe && <span className="safe">✅ Safe</span>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="joke-card error">
      <p>Unable to load joke</p>
    </div>
  );
}

export default JokeCard;
