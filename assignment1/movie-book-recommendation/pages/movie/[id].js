import { fetchMovieDetails } from "../../utils/api";
import { useRouter } from "next/router";

const MovieDetail = ({ movie }) => {
  return (
    <div className="details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Genres: {movie.genres.map((g) => g.name).join(", ")}</p>
        <p>Cast: {movie.credits.cast.slice(0, 5).map((c) => c.name).join(", ")}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const movie = await fetchMovieDetails(context.params.id);
  return { props: { movie } };
}

export default MovieDetail;
