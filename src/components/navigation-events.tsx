'use client';

import './GlobalLoader.scss';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [isVisible, setVisible] = useState(false);
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [currentRoute, setCurrentRoute] = useState<string>('');
	const [nextRoute, setNextRoute] = useState<string>('');
   
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log("ROUTE EVENTS")
    console.log(url)
    // You can now use the current URL
    // ...
    // setVisible(true)
  }, [pathname, searchParams])

	// First Render
	useEffect(() => {
		const url = `${pathname}`;
		console.log('First Render');
		console.log(url, 'on mount');
		setIsFirstRender(false);
		setCurrentRoute(pathname);
		// You can now use the current URL
		// ...
	}, []);

	// Change Start
	useEffect(() => {
		if (
			currentRoute.length &&
			`${pathname}`.length &&
			currentRoute !== pathname &&
			nextRoute === ''
		) {
			const url = `${pathname}`;
			console.log('Route Change Start');
			console.log(url, 'route events');
			console.log(currentRoute, 'currentRoute');
			console.log(nextRoute, 'nextRoute');

			setNextRoute(url);
			setVisible(true);
			// You can now use the current URL
			// ...
		}
	}, [currentRoute, nextRoute, pathname]);

	// Change Complete
	useEffect(() => {
		if (currentRoute.length && nextRoute.length && currentRoute !== nextRoute) {
			const url = `${pathname}`;
			console.log('Route Change Complete');
			console.log(url, 'route events');
			setCurrentRoute(nextRoute);
			// You can now use the current URL
			// ...
		}
	}, [currentRoute, nextRoute, pathname]);

	// Change Error
	// useEffect(() => {
	//   if (!isFirstRender && currentRoute.length) {
	//     const url = `${pathname}`;
	//     console.log('First Route Change Error');
	// 		console.log(url, 'route events');
	//
	// 		// You can now use the current URL
	// 		// ...
	// 	}
	// }, [currentRoute.length, isFirstRender, pathname]);

	// Change Cleanup
	useEffect(() => {
		if (currentRoute.length && nextRoute.length && currentRoute === nextRoute) {
			const url = `${pathname}`;
			console.log('Route Change Cleanup');
			// console.log(url, 'route events');
			setNextRoute('');
			// setVisible(false);
			// You can now use the current URL
			// ...
		}
	}, [currentRoute, nextRoute, pathname]);

	return (
		<>
			{isVisible ? (
				<div className='global-loader is-loading'>
					<div className='global-loader-fill' />
				</div>
			) : null}
		</>
	);
}
