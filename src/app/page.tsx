import Hero from '@/components/Hero';
import { ListingCarousel } from '@/components/ListingCarousel';
import {
	getListItem,
	getMovie,
	getTrending,
	getTvShow,
} from '../services/tmdbAPI';

const getData = async () => {
	try {
		const trendingMovies = await getTrending('movie');
		const trendingTv = await getTrending('tv');
		let featured;

		// feature a random item from movies or tv
		const items = [...trendingMovies.results, ...trendingTv.results];
		const randomItem = items[Math.floor(Math.random() * items.length)];
		const media = randomItem.title ? 'movie' : 'tv';

		if (media === 'movie') {
			featured = await getMovie(randomItem.id);
		} else {
			featured = await getTvShow(randomItem.id);
		}

		return {
			trendingMovies,
			trendingTv,
			featured,
		};
	} catch {
		throw new Error('Data not available');
	}
};

export default async function Page() {
	const data = await getData();
	return (
		<main className='main'>
			{data && (
				<>
					<Hero item={data?.featured} />
					<ListingCarousel
						items={data?.trendingMovies.results}
						viewAllHref={`/movie/categories/trending`}
						title={getListItem('movie', 'trending')?.TITLE}
					/>
					<ListingCarousel
						items={data?.trendingTv.results}
						viewAllHref={`/tv/categories/trending`}
						title={getListItem('tv', 'trending')?.TITLE}
					/>
				</>
			)}
			{/* <Show when={trendingMoviesShown}></Show> */}
		</main>
	);
}
