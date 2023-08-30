import Link from 'next/link';

export const Genre = (props: any) => (
	<>
		<Link href={`/genre/${props.genre.id}`}>{props.genre.name}</Link>
		{props.i < props.genresLength - 1 ? ', ' : ''}
	</>
);
