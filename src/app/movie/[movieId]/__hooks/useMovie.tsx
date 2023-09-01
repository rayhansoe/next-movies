import { getMovie } from '@/services/tmdbAPI';

export const useMovie = async (id: string | number | any) => {
	try {
		const item = await getMovie(id);

		if (item.adult) {
			throw new Error('Data not available');
		} else {
			return { item };
		}
	} catch {
		throw new Error('Data not available');
	}
};
