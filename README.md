# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Here’s a clean and professional **README.md** content you can include for your React Book Finder project 👇

---

# 📚 Simple Book Finder (React)

A lightweight React application that allows users to search for books by title using the **Open Library Search API**.
It displays the title and author details for the books matching the search query.

---

## 🚀 Features

* Search for books by title
* Fetches real data from [Open Library API](https://openlibrary.org/developers/api)
* Displays book titles and authors
* Simple, minimal, and responsive UI

---

## 🧰 Tech Stack

* **React** – Frontend framework
* **Fetch API** – For data fetching
* **CSS / Inline Styles** – For basic styling

---

## 🖥️ Demo Preview

> The app allows you to type a book title, click **Search**, and view up to 10 results.

Example API call:

```
https://openlibrary.org/search.json?title=harry%20potter
```

---

## 🧩 Folder Structure

```
book-finder/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-finder.git
cd book-finder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 💡 How It Works

1. User enters a book title in the input field.
2. The app calls the **Open Library API** endpoint:

   ```
   https://openlibrary.org/search.json?title={bookTitle}
   ```
3. The JSON response is parsed, and the app displays the top 10 matching book titles and authors.

---

## 🧠 Example Response (from API)

```json
{
  "numFound": 245,
  "docs": [
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author_name": ["J.K. Rowling"],
      "first_publish_year": 1997
    }
  ]
}
```

---

## ✨ Future Enhancements

* Display book cover images
* Add pagination
* Show more book details (publish year, subjects)
* Improve styling with Tailwind or Material UI

---

