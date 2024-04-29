"use client";

import Link from "next/link";

import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.container}>
      <img src={poster_path} alt={title} onClick={onClick}></img>
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
