import { useMovie } from "../__hooks/useMovie";
import './Images.scss';
import ImagesSection from "./__components/ImagesSection";

export default async function Photos({
	params,
}: {
	params: {
		movieId: string;
	};
}) {
  const data = await useMovie(params.movieId);
  return (
    data ? (
      <main>
      <ImagesSection
        title={"Backdrops"}
        images={data?.item.images.backdrops}
      />
      <ImagesSection title={"Posters"} images={data?.item.images.posters} />
    </main>
    ) :''
  );
}
