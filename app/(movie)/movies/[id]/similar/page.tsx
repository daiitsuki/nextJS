import Link from "next/link";
import Movie from "../../../../../components/movie";
import { Iparams } from "../page";

import styles from "./styles.module.css";
import { API_URL } from "../../../../constants";

export const metadata = {
  title: "Similar Movies",
};

export default async function SimilarPage({ params: { id } }: Iparams) {
  const data = await fetch(`${API_URL}/${id}/similar`).then((res) =>
    res.json()
  );
  console.log(data);
  return (
    <div>
      <Link href={`/movies/${id}`}>
        <div>뒤로가기</div>
      </Link>
      <div className={styles.container}>
        {data.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
