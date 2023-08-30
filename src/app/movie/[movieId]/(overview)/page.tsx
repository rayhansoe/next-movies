import { MovieInfo } from './__components/MovieInfo';
import { Credits } from './__components/Credits';
import { useMovie } from '../__hooks/useMovie';

export default async function MoviePage({
	params,
}: {
	params: {
		movieId: string;
	};
}) {
	const data = await useMovie(params.movieId);

	return data ? (
		<>
			<MovieInfo item={data?.item} />
			{data?.item?.credits?.cast?.length ? (
				<Credits people={data?.item?.credits?.cast} />
			) : (
				''
			)}
		</>
	) : (
		''
	);
}
