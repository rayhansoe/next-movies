import { getTvShow } from '@/services/tmdbAPI';

export const useTV = async (id:number | string | any) => {
  try {
    const item = await getTvShow(id);

    if (item.adult) {
      throw new Error("Data not available");
    } else {
      return { item };
    }
  } catch {
    throw new Error("Data not available");
  }
}
