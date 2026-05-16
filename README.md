# 🤖 YouTube AI Automator

Automatically generate AI scripts, create 30-second videos, and upload to YouTube — up to 10 videos per day on full autopilot.

## ✨ Features

- 🎯 **Niche Management** — Add your YouTube niches (e.g. "fitness tips", "money hacks")
- 🤖 **AI Script Generation** — Claude AI generates trending topics + engaging 30-second scripts
- 🎬 **Auto Video Creation** — Videos built with TTS audio + colorful visual slides using FFmpeg
- 📤 **Auto YouTube Upload** — Uploads with AI-generated titles, descriptions, and hashtags
- ⏰ **Daily Cron Job** — Runs automatically every day at 9 AM
- 📊 **Dashboard** — Full stats, manual controls, video management

---

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/youtube-ai-automator.git
cd youtube-ai-automator
```

### 2. Install FFmpeg (required for video creation)
```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# macOS
brew install ffmpeg

# Windows
# Download from https://ffmpeg.org/download.html and add to PATH
```

### 3. Set up the Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your API keys (see below)
npm run dev
```

### 4. Set up the Frontend
```bash
cd frontend
npm install
npm run dev
```

### 5. Open the app
Go to **http://localhost:3000** in your browser.

---

## 🔑 Getting Your API Keys

### Google OAuth (YouTube API) — FREE
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (name it anything)
3. Go to **APIs & Services → Library**
4. Search and enable **YouTube Data API v3**
5. Go to **APIs & Services → Credentials**
6. Click **Create Credentials → OAuth 2.0 Client ID**
7. Set Application Type to **Web Application**
8. Add Authorized Redirect URI: `http://localhost:5000/api/auth/callback`
9. Copy **Client ID** and **Client Secret** to your `.env` file

### Anthropic API (Claude AI) — Paid per use (~$0.003 per script)
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up and add a payment method
3. Go to **API Keys → Create Key**
4. Copy the key to `ANTHROPIC_API_KEY` in your `.env` file

### Your `.env` file should look like:
```env
GOOGLE_CLIENT_ID=123456789-abc.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-yoursecrethere
GOOGLE_REDIRECT_URI=http://localhost:5000/api/auth/callback
ANTHROPIC_API_KEY=sk-ant-yourkeyhere
SESSION_SECRET=any-random-string-you-choose
PORT=5000
```

---

## 📁 Project Structure

```
youtube-ai-automator/
├── backend/
│   ├── routes/
│   │   ├── auth.js          # Google OAuth login/callback
│   │   ├── niches.js        # Niche CRUD API
│   │   ├── videos.js        # Video generation API
│   │   ├── upload.js        # YouTube upload API
│   │   └── dashboard.js     # Stats & settings API
│   ├── services/
│   │   ├── aiScript.js      # Claude AI script generation
│   │   ├── videoCreator.js  # FFmpeg video creation + TTS
│   │   ├── youtubeUpload.js # YouTube Data API uploader
│   │   └── db.js            # SQLite database
│   ├── jobs/
│   │   └── dailyUpload.js   # Cron job (runs at 9 AM daily)
│   ├── data/                # SQLite DB stored here
│   ├── temp_videos/         # Temp video files (auto-cleaned)
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Niches.jsx
    │   │   ├── Videos.jsx
    │   │   └── Settings.jsx
    │   ├── components/
    │   │   └── Sidebar.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

---

## 🎮 How to Use

1. **Login** — Click "Connect YouTube Account" and authorize with Google
2. **Add Niches** — Go to Niches tab, add topics like "fitness tips", "AI tools"
3. **Run the Job** — Click "Run Daily Job" on Dashboard, or wait for 9 AM auto-run
4. **Watch it work** — AI generates scripts → creates videos → uploads to YouTube
5. **Monitor** — Track all videos in the Videos tab

---

## ⚠️ YouTube API Quota

The free YouTube Data API gives **10,000 units/day**.  
Each upload costs ~1,600 units → **~6 uploads/day free**.

To upload 10/day:
- Go to [Google Cloud Console](https://console.cloud.google.com)
- APIs & Services → YouTube Data API v3 → Quotas → Request Increase
- It's free and usually approved in 1-2 days.

---

## 💰 Cost Estimate

| Service | Cost |
|---------|------|
| YouTube Data API | Free |
| Anthropic Claude (scripts) | ~$0.003/script = ~$0.03/day for 10 videos |
| Google TTS (via Google Translate) | Free |
| FFmpeg (video rendering) | Free |
| **Total** | **~$1/month** |

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express, SQLite (better-sqlite3)
- **Frontend**: React + Vite
- **AI**: Anthropic Claude claude-sonnet-4
- **Video**: FFmpeg + Google Translate TTS
- **YouTube**: Google APIs (googleapis)
- **Auth**: Google OAuth 2.0
- **Scheduler**: node-cron

---

## 📜 License

MIT — Personal use only. Respect YouTube's Terms of Service.