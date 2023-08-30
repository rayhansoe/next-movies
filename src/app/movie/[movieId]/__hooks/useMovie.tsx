import { getMovie } from '@/services/tmdbAPI';
import { revalidatePath } from 'next/cache';

export const useMovie = async (id: string | number | any) => {
	try {
		const item = await getMovie(id);

		if (item.adult) {
			throw new Error('Data not available');
		} else {
			revalidatePath(`/movie/${id}`)
			return { item };
		}
	} catch {
		throw new Error('Data not available');
	}
};
