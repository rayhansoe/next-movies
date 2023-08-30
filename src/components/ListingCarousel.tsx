import Link from 'next/link';
import { Card } from './Card';

export function ListingCarousel(props: any) {
	return (
		<>
			{!!props.items?.length ? (
				<div className='listing listing--carousel'>
					{props.title || props.viewAllUrl ? (
						<div className='listing__head'>
							{props.title ? <h2 className='listing__title'>{props.title}</h2> : ''}

							{props.viewAllUrl ? (
								<Link href={props.viewAllHref} className='listing__explore'>
									<strong>Explore All</strong>
								</Link>
							) : (
								''
							)}
						</div>
					) : (
						''
					)}

					<div className='carousel'>
						<button
							className='carousel__nav carousel__nav--left'
							aria-label='Previous'
							type='button'
							// disabled="disableLeftButton"
							// click="moveToClickEvent('left')"
						>
							{/* <ChevronLeftIcon /> */}
						</button>

						<div className='carousel__items'>
							{props.items.map((item: any, id: any) => (
								<Card item={item} key={id} />
							))}

							<div className='card'>
								<Link href={props.viewAllHref} className='card__link'>
									<div className='card__img'>
										<span>Explore All</span>
									</div>
								</Link>
							</div>
						</div>

						<button
							className='carousel__nav carousel__nav--right'
							aria-label='Next'
							type='button'
							// disabled="disableRightButton"
							// click="moveToClickEvent('right')"
						>
							{/* <ChevronRightIcon /> */}
						</button>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}
