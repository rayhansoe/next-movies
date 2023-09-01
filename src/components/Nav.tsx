'use client';

/* eslint-disable @next/next/no-img-element */
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { LuClapperboard } from 'react-icons/lu';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav() {
	const pathname = usePathname();
	return (
		<nav className={styles.nav}>
			<ul className='nolist'>
				<li className={styles.logo} style={{
          width: '48px',
          height: '48px',
          borderRadius: '9999px',
          borderWidth: '1px',
          borderColor: 'hsla(0,0%,100%,.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
					{/* <img
            src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjYgMTU1LjMiPjxwYXRoIGQ9Ik0xNjMgMzVTMTEwLTQgNjkgNWwtMyAxYy02IDItMTEgNS0xNCA5bC0yIDMtMTUgMjYgMjYgNWMxMSA3IDI1IDEwIDM4IDdsNDYgOSAxOC0zMHoiIGZpbGw9IiM3NmIzZTEiLz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjcuNSIgeTE9IjMiIHgyPSIxNTIiIHkyPSI2My41Ij48c3RvcCBvZmZzZXQ9Ii4xIiBzdG9wLWNvbG9yPSIjNzZiM2UxIi8+PHN0b3Agb2Zmc2V0PSIuMyIgc3RvcC1jb2xvcj0iI2RjZjJmZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc2YjNlMSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTE2MyAzNVMxMTAtNCA2OSA1bC0zIDFjLTYgMi0xMSA1LTE0IDlsLTIgMy0xNSAyNiAyNiA1YzExIDcgMjUgMTAgMzggN2w0NiA5IDE4LTMweiIgb3BhY2l0eT0iLjMiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNNTIgMzVsLTQgMWMtMTcgNS0yMiAyMS0xMyAzNSAxMCAxMyAzMSAyMCA0OCAxNWw2Mi0yMVM5MiAyNiA1MiAzNXoiIGZpbGw9IiM1MThhYzgiLz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTUuOCIgeTE9IjMyLjYiIHgyPSI3NCIgeTI9IjEwNS4yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3NmIzZTEiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNDM3N2JiIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWYzYjc3Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNNTIgMzVsLTQgMWMtMTcgNS0yMiAyMS0xMyAzNSAxMCAxMyAzMSAyMCA0OCAxNWw2Mi0yMVM5MiAyNiA1MiAzNXoiIG9wYWNpdHk9Ii4zIiBmaWxsPSJ1cmwoI2IpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE4LjQiIHkxPSI2NC4yIiB4Mj0iMTQ0LjMiIHkyPSIxNDkuOCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzE1YWE5Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iIzUxOGFjOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMxNWFhOSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTEzNCA4MGE0NSA0NSAwIDAwLTQ4LTE1TDI0IDg1IDQgMTIwbDExMiAxOSAyMC0zNmM0LTcgMy0xNS0yLTIzeiIgZmlsbD0idXJsKCNjKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3NS4yIiB5MT0iNzQuNSIgeDI9IjI0LjQiIHkyPSIyNjAuOCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDM3N2JiIi8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iIzFhMzM2YiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFhMzM2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTExNCAxMTVhNDUgNDUgMCAwMC00OC0xNUw0IDEyMHM1MyA0MCA5NCAzMGwzLTFjMTctNSAyMy0yMSAxMy0zNHoiIGZpbGw9InVybCgjZCkiLz48L3N2Zz4="
            width={48}
            height={48}
            alt="solid logo"
          /> */}
					<svg viewBox='0 0 180 180' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<mask
							id='mask0_408_134'
							style={{ maskType: 'alpha' }}
							x='0'
							y='0'
							width='180'
							height='180'
						>
							<circle cx='90' cy='90' r='90' fill='black' />
						</mask>
						<g mask='url(#mask0_408_134)'>
							<circle cx='90' cy='90' r='90' fill='black' />
							<path
								d='M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z'
								fill='url(#paint0_linear_408_134)'
							/>
							<rect
								x='115'
								y='54'
								width='12'
								height='72'
								fill='url(#paint1_linear_408_134)'
							/>
						</g>
						<defs>
							<linearGradient
								id='paint0_linear_408_134'
								x1='109'
								y1='116.5'
								x2='144.5'
								y2='160.5'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='white' />
								<stop offset='1' stopColor='white' stopOpacity='0' />
							</linearGradient>
							<linearGradient
								id='paint1_linear_408_134'
								x1='121'
								y1='54'
								x2='120.799'
								y2='106.875'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='white' />
								<stop offset='1' stopColor='white' stopOpacity='0' />
							</linearGradient>
						</defs>
					</svg>
				</li>
				<li>
					<Link
						className={pathname === '/' ? 'active' : ''}
						href='/'
						aria-label='Home'
					>
						<AiOutlineHome style={{ width: '24px', height: '24px' }} />
					</Link>
				</li>
				<li>
					<Link
						className={pathname === '/movie' ? 'active' : ''}
						href='/movie'
						aria-label='Movies'
					>
						<LuClapperboard style={{ width: '24px', height: '24px' }} />
					</Link>
				</li>
				<li>
					<Link
						className={pathname === '/tv' ? 'active' : ''}
						href='/tv'
						aria-label='TV Shows'
					>
						<PiTelevisionSimpleBold style={{ width: '24px', height: '24px' }} />
					</Link>
				</li>
				<li>
					<Link
						className={pathname === '/search' ? 'active' : ''}
						href='/search'
						aria-label='Search'
					>
						<AiOutlineSearch style={{ width: '24px', height: '24px' }} />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
