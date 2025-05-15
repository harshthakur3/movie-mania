# 🎬 Movie Finder App

A sleek and fast movie browsing app built with **React + Vite**, allowing users to:

- 🔍 Search for movies by name
- 📊 View ratings, release year, and language
- 🎞 Watch trailers instantly
- 📥 Get a download link (for educational/demo purposes)

Powered by [The Movie Database (TMDB) API](https://developer.themoviedb.org/docs) and styled with **Tailwind CSS**.

---

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://developer.themoviedb.org/)
- [React-use](https://github.com/streamich/react-use) for debounce
- [YouTube Search](https://www.youtube.com/) for trailers
- [Custom Redirects] for download links

---

## 🔧 Features

- 🔎 **Live Search** with debounce
- 🎞 **Auto trailer link** (redirects to YouTube or HiAnime for anime)
- 💾 **Download redirect** (for demonstration purposes only)
- 💻 **Responsive UI** with hover animations
- ⚡️ **Fast performance** with Vite’s HMR

---

## 📁 Project Structure

src/
├── components/
│ ├── MovieCard.jsx
│ ├── Search.jsx
│ └── Spinner.jsx
├── App.jsx
├── main.jsx
└── index.css