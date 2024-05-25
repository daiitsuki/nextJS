import { Suspense } from "react";
import { API_URL } from "../app/(home)/page";
import styles from "./movie-video.module.css";

async function getVideo(id: string) {
  //  IF API ERROR
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("something wrong!");

  return await fetch(`${API_URL}/${id}/videos`).then((res) => res.json());
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <Suspense fallback={<h2>동영상을 불러오는 중입니다.</h2>}>
      <div className={styles.container}>
        {videos.map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
          />
        ))}
      </div>
    </Suspense>
  );
}
