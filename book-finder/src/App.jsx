import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    if (!query.trim()) return;
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setBooks(data.docs.slice(0, 10)); // show first 10 results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>📚 Simple Book Finder</h1>
      <input
        type="text"
        placeholder="Enter book title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />
      <button
        onClick={searchBooks}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      <div style={{ marginTop: "30px" }}>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <strong>{book.title}</strong> <br />
              <span>
                Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
              </span>
              <hr style={{ width: "300px", margin: "10px auto" }} />
            </div>
          ))
        ) : (
          <p>Search for a book to see results.</p>
        )}
      </div>
    </div>
  );
}

export default App;
