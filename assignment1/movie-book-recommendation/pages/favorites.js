import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="grid">
        {favorites.map((item) =>
          item.type === "movie" ? (
            <MovieCard key={item.id} movie={item} />
          ) : (
            <BookCard key={item.id} book={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Favorites;
