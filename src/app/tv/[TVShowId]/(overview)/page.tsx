import { useTV } from "../__hooks/useTV";
import { Credits } from "./__componets/Credits";
import { TVInfo } from "./__componets/TVInfo";


export default async function MoviePage({
	params,
}: {
	params: {
    TVShowId: string
  }
}) {
	const data = await useTV(params.TVShowId);

	return data ? (
		<>
			<TVInfo item={data?.item} />
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
