// import Hero from "~/components/Hero";
// import { ListingCarousel } from "~/components/ListingCarousel";
// import { getListItem, getMovie, getMovies } from "~/services/tmdbAPI";

import Hero from '@/components/Hero';
import { ListingCarousel } from '@/components/ListingCarousel';
import { getListItem, getMovie, getMovies } from '@/services/tmdbAPI';

const getData = async () => {
	try {
		const popular = await getMovies('popular');
		const topRated = await getMovies('top_rated');
		// const upcoming = await getMovies("upcoming");
		const nowPlaying = await getMovies('now_playing');
		const featured = await getMovie(topRated.results[0].id);

		return {
			popular,
			topRated,
			// upcoming,
			nowPlaying,
			featured,
		};
	} catch (e: any) {
		console.log(e.stack);
		throw Error(e.message)
	}
};

export default async function Page() {
	const data = await getData();
	return (
		<main className='main'>
			{data ? (
				<>
					<Hero item={data?.featured} />
					<ListingCarousel
						items={data?.popular.results}
						title={getListItem('movie', 'popular')?.TITLE}
						viewAllHref={`/movie/categories/popular`}
					/>
					<ListingCarousel
						items={data?.topRated.results}
						viewAllHref={`/movie/categories/top_rated`}
						title={getListItem('movie', 'top_rated')?.TITLE}
					/>
					{/* <ListingCarousel
          items={data?.upcoming.results}
          title={getListItem("movie", "upcoming").TITLE}
          viewAllHref={`/movie/categories/upcoming`}
        /> */}
					<ListingCarousel
						items={data?.nowPlaying.results}
						title={getListItem('movie', 'now_playing')?.TITLE}
						viewAllHref={`/movie/categories/now_playing`}
					/>
				</>
			) : (
				''
			)}
			{/* <Show when={trendingMoviesShown}></Show> */}
		</main>
	);
}
