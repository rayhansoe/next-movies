import Link from 'next/link';
import Poster from './Poster';

export function Card(props: any) {
	const media = props.item.media_type
		? props.item.media_type
		: props.item.name
		? 'tv'
		: 'movie';
	return (
		<div className='card'>
			<Link className='card__link' href={`/${media}/${props.item.id}`}>
				<div className='card__img'>
					<Poster
						path={props.item.poster_path}
						alt={props.item.title || props.item.name}
						loading={props.loading || 'eager'}
					/>
				</div>
				<h2>{props.item.title}</h2>
			</Link>
		</div>
	);
}
