/* eslint-disable react-hooks/rules-of-hooks */
import { useMovie } from './__hooks/useMovie';
import { MovieLayout } from './__component/MovieLayout';

import { Metadata } from 'next'
 
type Props = {
  params: { movieId: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.movieId
 
  // fetch data
  const data = await useMovie(id);
 
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

export default async function MoviePage({
	children,
  params
}: {
	children: React.ReactNode;
  params: {
    movieId: string
  }
}) {
	const data = await useMovie(params.movieId);
	return (
		<main>
			<MovieLayout data={data} />
      {children}
		</main>
	);
}
