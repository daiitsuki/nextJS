import { API_URL } from "../app/(home)/page";

async function getVideo(id: string) {
  //  IF API ERROR
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("something wrong!");

  return await fetch(`${API_URL}/${id}/videos`).then((res) => res.json());
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
