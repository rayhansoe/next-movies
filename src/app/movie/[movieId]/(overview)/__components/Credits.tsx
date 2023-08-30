import { CreditsItem } from './CreditsItem';

export function Credits(props: any) {
	return (
		<div className='listing listing--carousel'>
			<div className='listing__head'>
				<h2 className='listing__title'>Cast</h2>
			</div>

			<div className='carousel'>
				<button
					className='carousel__nav carousel__nav--left'
					aria-label='Previous'
					type='button'
				>
					{/* <ChevronLeftIcon /> */}
				</button>

				<div className='carousel__items'>
					{props.people.map((person: any) => (
						<CreditsItem key={person.id} person={person} />
					))}
				</div>

				<button
					className='carousel__nav carousel__nav--right'
					aria-label='Next'
					type='button'
				>
					{/* <ChevronRightIcon /> */}
				</button>
			</div>
		</div>
	);
}
