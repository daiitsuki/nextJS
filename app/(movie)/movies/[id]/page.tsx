import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

export interface Iparams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Iparams) {
  const movie = await getMovie(id);
  return { title: movie.title };
}

export default async function MovieDetail({ params: { id } }: Iparams) {
  return (
    <>
      <Suspense fallback={<h2>movie info loading..</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>movie videos loading..</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
