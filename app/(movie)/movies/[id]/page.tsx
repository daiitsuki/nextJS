import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
