import ImagesItem  from './ImagesItem';

export default function ImagesSection(props: any) {
	return (
		<div className='spacing'>
			<div className='images__head'>
				<h2 className='images__title'>{props.title}</h2>
				<strong className='images__count'> {props.images?.length} Images </strong>
			</div>
			<div className='images__items'>
				{props.images.map((image: any) => <ImagesItem key={image.file_path} type={props.title.toLowerCase()} image={image} />)}
			</div>
		</div>
	);
}