import { getTvShow } from '@/services/tmdbAPI';
import { revalidatePath } from 'next/cache';

export const useTV = async (id:number | string | any) => {
  try {
    const item = await getTvShow(id);

    if (item.adult) {
      throw new Error("Data not available");
    } else {
      revalidatePath(`/tv/${id}`)
      return { item };
    }
  } catch {
    throw new Error("Data not available");
  }
}
