import { TVShowLayout } from "./__component/TVShowLayout";
import { useTV } from "./__hooks/useTV";

export default async function TVShowPage({
	children,
  params
}: {
	children: React.ReactNode;
  params: {
    TVShowId: string
  }
}) {
	const data = await useTV(params.TVShowId);
	return (
		<main>
			<TVShowLayout data={data} />
      {children}
		</main>
	);
}
