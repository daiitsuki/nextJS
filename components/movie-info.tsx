import Link from "next/link";

import styles from "./movie-info.module.css";
import { API_URL } from "../app/constants";

export async function getMovie(id: string) {
  return await fetch(`${API_URL}/${id}`).then((res) => res.json());
}
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src={movie.poster_path} alt="movie_poster" />
        <a href={movie.homepage} target="_blank">
          사이트로 이동☞
        </a>
      </div>
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <h5>⭐ {movie.vote_average.toFixed(1)}</h5>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.id}>▪️{genre.name}</li>
          ))}
        </ul>
        <p>{movie.overview}</p>
        <Link href={`/movies/${id}/similar`}>
          <span>비슷한 영화 추천 ☞</span>
        </Link>
      </div>
    </div>
  );
}
