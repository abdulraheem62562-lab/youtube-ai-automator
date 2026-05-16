# 🤣 Random Joke Generator - Frontend

A beautiful React app to generate random jokes with search functionality and category filtering.

## ✨ Features

- 😂 **Random Jokes** — Get a new joke with one click
- 🔍 **Search** — Find jokes by keyword
- 📂 **Categories** — Filter by type (General, Programming, Knock-Knock, Dark, Miscellaneous)
- 📜 **History** — Quick access to recent jokes
- 🎨 **Beautiful UI** — Modern, responsive design
- ⚡ **Fast** — Built with React + Vite

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd joke-generator/frontend
npm install
```

### 2. Start the Frontend
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Make Sure Backend is Running
```bash
cd ../  # Go back to joke-generator
npm start  # Run backend on port 5000
```

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── JokeCard.jsx        # Displays the joke
│   │   ├── SearchBar.jsx       # Search input
│   │   └── CategoryButtons.jsx # Category filters
│   ├── App.jsx                 # Main app logic
│   ├── App.css                 # Main styles
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

---

## 🎨 UI Components

### JokeCard
Displays jokes in a beautiful card format with animations. Supports both single-line and two-part jokes.

### SearchBar
Search for jokes by keyword with a clean input design.

### CategoryButtons
Quickly switch between joke categories with visual feedback.

---

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite** — Build tool (fast development)
- **Axios** — HTTP client
- **CSS3** — Modern styling with gradients and animations

---

## 📊 How It Works

1. Frontend sends requests to backend API
2. Backend fetches jokes from JokeAPI
3. Frontend displays joke in beautiful card
4. User can search, filter by category, or get next joke
5. Recent jokes stored in history

---

## 🎯 Available Routes

The frontend communicates with these backend endpoints:

```
GET /api/jokes/random                  # Random joke
GET /api/jokes/search?query=keyword    # Search jokes
GET /api/jokes/type/general            # Jokes by type
```

---

## 📱 Responsive Design

The app works perfectly on:
- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

---

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

---

## 🎉 Enjoy!

Have fun generating random jokes and making people laugh! 😂
