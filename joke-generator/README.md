# 🤣 Random Joke Generator

A simple REST API to fetch random jokes using the free **JokeAPI**. Supports multiple joke types and search functionality.

## ✨ Features

- 🎲 **Get Random Jokes** — Fetch jokes from any category
- 🔍 **Search Jokes** — Find jokes by keyword
- 📂 **Multiple Types** — General, Knock-Knock, Programming, Dark, Miscellaneous
- 🛡️ **Safe Mode** — All jokes are filtered for content
- ⚡ **Express API** — Fast, lightweight REST API
- 🆓 **Free** — Uses free JokeAPI (no authentication required)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd joke-generator
npm install
```

### 2. Run the Server
```bash
npm start
```

The API will be available at `http://localhost:3000`

### 3. Development Mode (with auto-reload)
```bash
npm run dev
```

---

## 📚 API Endpoints

### Get a Random Joke
```bash
GET /api/jokes/random
```

**Response:**
```json
{
  "id": 123,
  "type": "General",
  "joke": "Why don't scientists trust atoms? Because they make up everything!",
  "isSafe": true
}
```

---

### Get Two-Part Joke (Setup + Delivery)
```bash
GET /api/jokes/random
```

**Response:**
```json
{
  "id": 456,
  "type": "Programming",
  "setup": "Why do Java developers wear glasses?",
  "delivery": "Because they can't C#",
  "isSafe": true
}
```

---

### Search Jokes by Keyword
```bash
GET /api/jokes/search?query=knock
```

**Response:**
```json
{
  "query": "knock",
  "results": {
    "id": 789,
    "type": "Knock-Knock",
    "setup": "Knock knock",
    "delivery": "Who's there?",
    "isSafe": true
  }
}
```

---

### Get Jokes by Type
```bash
GET /api/jokes/type/programming
```

**Available Types:**
- `general` — General jokes
- `knock-knock` — Knock-knock jokes
- `programming` — Programming/tech jokes
- `miscellaneous` — Miscellaneous jokes
- `dark` — Dark humor jokes

**Response:**
```json
{
  "id": 101,
  "type": "Programming",
  "setup": "Why do programmers prefer dark mode?",
  "delivery": "Because light attracts bugs!",
  "isSafe": true
}
```

---

## 📁 Project Structure

```
joke-generator/
├── index.js              # Express server setup
├── routes/
│   └── jokes.js         # API route handlers
├── services/
│   └── jokeService.js   # Business logic & JokeAPI calls
├── .env.example         # Environment variables template
├── package.json         # Dependencies
└── README.md           # Documentation
```

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **HTTP Client**: Axios
- **API**: [JokeAPI](https://jokeapi.dev) (Free, no auth required)
- **CORS**: Enabled for all origins
- **Dev**: Nodemon for auto-reload

---

## 🔗 External API

This project uses the free **[JokeAPI](https://jokeapi.dev)** by Sv443:
- **Base URL**: `https://v2.jokeapi.dev/joke`
- **Authentication**: None required
- **Rate Limit**: Generous (no strict limits)
- **Format**: JSON

**API Documentation**: https://jokeapi.dev

---

## 💻 Example Usage

### Using cURL
```bash
# Get a random joke
curl http://localhost:3000/api/jokes/random

# Search for jokes about programming
curl http://localhost:3000/api/jokes/search?query=programming

# Get a knock-knock joke
curl http://localhost:3000/api/jokes/type/knock-knock
```

### Using JavaScript (Fetch API)
```javascript
// Get random joke
const getJoke = async () => {
  const response = await fetch('http://localhost:3000/api/jokes/random');
  const joke = await response.json();
  console.log(joke);
};

getJoke();
```

### Using Python
```python
import requests

response = requests.get('http://localhost:3000/api/jokes/random')
joke = response.json()
print(joke)
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Steps
1. Navigate to the joke-generator directory
2. Run `npm install`
3. Create `.env` file from `.env.example`
4. Run `npm start` or `npm run dev`
5. Open `http://localhost:3000/api/jokes/random` in browser

---

## 📝 License

MIT — Free to use and modify

---

## 🎉 Have Fun!

Enjoy generating random jokes! Share them with friends and make them laugh! 😄
