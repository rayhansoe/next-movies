import { getPerson } from '@/services/tmdbAPI';
import { PersonInfo } from './PersonInfo';
import { revalidatePath } from 'next/cache';

import { Metadata } from 'next'
 
type Props = {
	params: { personId: string }
}

const getData = async (id: number | string | any) => {
	try {
		const item = await getPerson(id);

		if (item.adult) {
			throw new Error('Data not available');
		} else {
			revalidatePath(`/person/${id}`);
			return { item };
		}
	} catch {
		throw new Error('Data not available');
	}
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.personId
 
  // fetch data
  const data = await getData(id);
 
  return {
    title: data.item.name,
		description: data.item.biography || data.item.name,
    openGraph: data.item.profile_path
		? {
				images: [
					{
						url: `https://image.tmdb.org/t/p/w500${data.item.profile_path}`,
						alt: data.item.name
					}
				]
			}
		: null
  }
}


export default async function PersonPage({
	params,
}: {
	params: { personId: number | string | any };
}) {
	const data = await getData(params.personId);

	return <main>{data ? <PersonInfo person={data.item} /> : ''}</main>;
}
