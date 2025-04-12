import { useEffect, useState } from "react";
import { fetchMovies, fetchBooks } from "../utils/api";
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMovies().then(setMovies);
    fetchBooks().then(setBooks);
  }, []);

  const handleSearch = async () => {
    if (search.trim()) {
      const movieResults = await fetchMovies(search);
      const bookResults = await fetchBooks(search);
      setMovies(movieResults);
      setBooks(bookResults);
    }
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies or books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h2>Popular Movies</h2>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h2>Trending Books</h2>
      <div className="grid">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </>
  );
}
