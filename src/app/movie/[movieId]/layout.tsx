import { useMovie } from './__hooks/useMovie';
import { MovieLayout } from './__component/MovieLayout';

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
