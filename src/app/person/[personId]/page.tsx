import { getPerson } from '@/services/tmdbAPI';
import { PersonInfo } from './PersonInfo';
import { revalidatePath } from 'next/cache';

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

export default async function PersonPage({
	params,
}: {
	params: { personId: number | string | any };
}) {
	const data = await getData(params.personId);

	return <main>{data ? <PersonInfo person={data.item} /> : ''}</main>;
}
