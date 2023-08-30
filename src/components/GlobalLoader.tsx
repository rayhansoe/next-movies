'use client';
import { useRouter } from 'next/router';
// import { createSignal, Show } from "solid-js";
// import { isServer } from "solid-js/web";

import './GlobalLoader.scss';
import { useEffect, useState } from 'react';

const Loader = () => {
	const [isVisible, setVisible] = useState(false);
	const router = useRouter();
	// // if (!isServer) {
	// //   window.router.router.addEventListener("navigation-start", (e) => {
	// //     setVisible(true);
	// //   });

	// //   window.router.router.addEventListener("navigation-end", (e) => {
	// //     setVisible(false);
	// //   });

	// //   window.router.router.addEventListener("navigation-error", (e) => {
	// //     setVisible(false);
	// //   });
	// // }

	// useEffect(() => {
	// 	router.events.on('routeChangeStart', (url) => {
	// 		console.log('hey');

	// 		setVisible(true);
	// 	});

	// 	router.events.on('routeChangeComplete', (url) => {
	// 		setVisible(false);
	// 	});

	// 	router.events.on('routeChangeError', (url) => {
	// 		setVisible(false);
	// 	});
	// }, [router]);

	// useEffect(() => {
	// 	if (window?.router) {
	// 		window.router.router.addEventListener("navigation-start", (e) => {
	// 			setVisible(true);
	// 		});

	// 		window.router.router.addEventListener("navigation-end", (e) => {
	// 			setVisible(false);
	// 		});

	// 		window.router.router.addEventListener("navigation-error", (e) => {
	// 			setVisible(false);
	// 		});
	// 	}
	// }, [])

	return (
		<>
			{isVisible ? (
				<div className='global-loader is-loading'>
					<div className='global-loader-fill' />
				</div>
			) : null}
		</>
	);
};
export default Loader;
