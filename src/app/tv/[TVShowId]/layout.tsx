/* eslint-disable react-hooks/rules-of-hooks */
import { TVShowLayout } from "./__component/TVShowLayout";
import { useTV } from "./__hooks/useTV";

import { Metadata } from 'next'
 
type Props = {
  params: { TVShowId: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.TVShowId
 
  // fetch data
  const data = await useTV(id);
 
  return {
    title: data.item.title || data.item.name,
		description: data.item.overview,
    openGraph: data.item.poster_path
		? {
				images: [
					{
						url: `https://image.tmdb.org/t/p/w500${data.item.poster_path}`,
						alt: data.item.title || data.item.name
					}
				]
			}
		: null
  }
}


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
