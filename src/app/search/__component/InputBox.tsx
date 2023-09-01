'use client';

import { useState } from 'react';

export default function InputBox(props: { value: string }) {
	const [value, setValue] = useState(props.value || '');
	return (
		<input
			autoComplete='off'
			id='q'
			name='q'
			type='text'
			placeholder='Search for a movie, tv show or person...'
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
}
