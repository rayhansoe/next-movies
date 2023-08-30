import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineLink,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { FaImdb } from "react-icons/fa6";

type Props = {
	media?: string;
	links: {
		twitter_id?: string;
		facebook_id?: string;
		instagram_id?: string;
		imdb_id?: string;
		homepage?: string;
	};
};

export function ExternalLinks(props: Props) {
	const { links } = props;

	return (
		<ul className='nolist'>
			{links.twitter_id && (
				<li>
					<a
						href={`https://twitter.com/${links.twitter_id}`}
						target='_blank'
						aria-label='Twitter account'
						rel='noopener'
					>
						<AiOutlineTwitter  style={{ width: '24px', height: '24px' }}  />
					</a>
				</li>
			)}

			{links.facebook_id && (
				<li>
					<a
						href={`https://facebook.com/${links.facebook_id}`}
						target='_blank'
						aria-label='Facebook account'
						rel='noopener'
					>
						<AiOutlineFacebook  style={{ width: '24px', height: '24px' }}  />
					</a>
				</li>
			)}

			{links.instagram_id && (
				<li>
					<a
						href={`https://instagram.com/${links.instagram_id}`}
						target='_blank'
						aria-label='Instagram account'
						rel='noopener'
					>
						<AiOutlineInstagram  style={{ width: '24px', height: '24px' }}  />
					</a>
				</li>
			)}

			{links.imdb_id && (
				<li>
					<a
						href={`https://www.imdb.com/${
							props.media === 'person' ? 'name' : 'title'
						}/${links.imdb_id}`}
						target='_blank'
						aria-label='IMDb account'
						rel='noopener'
					>
						<FaImdb  style={{ width: '24px', height: '24px' }}  />
					</a>
				</li>
			)}

			{links.homepage && (
				<li>
					<a
						href={links.homepage}
						target='_blank'
						aria-label='Homepage'
						rel='noopener'
					>
						<AiOutlineLink  style={{ width: '24px', height: '24px' }}  />
					</a>
				</li>
			)}
		</ul>
	);
}
