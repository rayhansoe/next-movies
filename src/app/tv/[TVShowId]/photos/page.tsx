
import { useTV } from '../__hooks/useTV';
import './Images.scss';
import ImagesSection from "./__components/ImagesSection";

export default async function Photos({
	params,
}: {
	params: {
		TVShowId: string;
	};
}) {
  const data = await useTV(params.TVShowId);
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
