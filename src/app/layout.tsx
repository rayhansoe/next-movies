import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Loader from '@/components/GlobalLoader';
import '../assets/css/global.scss';
import { Suspense } from 'react';
import { NavigationEvents } from '@/components/navigation-events';
import NextTopLoader from 'nextjs-toploader';

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export const metadata: Metadata = {
	title: 'Next Movies',
	description:
		'A TMDB client built with Next App to show the potential of it ✨',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				{/* <Loader /> */}
				<NextTopLoader
					color='#2299DD'
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl={true}
					easing='ease'
					speed={200}
					shadow='0 0 10px #2299DD,0 0 5px #2299DD'
				/>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
