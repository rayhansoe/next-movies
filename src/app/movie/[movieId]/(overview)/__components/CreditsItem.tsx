/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import './CreditItems.scss';

export function CreditsItem(props: any) {
	return (
		<li className='credits-item' style={{ listStyleType: 'none' }}>
			<Link className='credits-item__link' href={`/person/${props.person.id}`}>
				<div className='credits-item__img'>
					<img
						loading='lazy'
						width='370'
						height='556'
						sizes='xsmall:29vw small:29vw medium:17vw large:14vw xlarge:13vw xlarge1:11vw xlarge2:12vw xlarge3:342'
						alt={props.person.name}
						src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${props.person.profile_path}`}
					/>
					{/* <PlaceholderIcon v-else /> */}
				</div>

				<h2 className='credits-item__name'>{props.person.name}</h2>

				<div className='credits-item__character'>{props.person.character}</div>
			</Link>
		</li>
	);
}
