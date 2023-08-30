'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function ImagesItem(props: any) {
	const thumbWidth = props.type === 'posters' ? 370 : 533;
	const thumbHeight = props.type === 'posters' ? 556 : 300;

	return (
		<div className={`images-item images-${props.type}`}>
			<div className='images-item__img'>
				<img
					// loading="lazy"
					width={thumbWidth}
					height={thumbHeight}
					// sizes="xsmall:29vw small:29vw medium:17vw large:14vw xlarge:13vw xlarge1:11vw xlarge2:12vw xlarge3:342"
					src={`https://image.tmdb.org/t/p/w${thumbWidth}_and_h${thumbHeight}_bestv2${props
						.image.file_path!}`}
					style={{ aspectRatio: props.image.aspect_ratio }}
				/>
			</div>
		</div>
	);
}
