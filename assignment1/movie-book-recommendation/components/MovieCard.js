import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <Link href={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
