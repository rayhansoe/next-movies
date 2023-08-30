import { ExternalLinks } from '@/components/ExternalLinks';
import Poster from '@/components/Poster';
import {
	formatCurrency,
	formatDate,
	formatLanguage,
	formatRuntime,
} from '@/utils/format';
import styles from './MovieInfo.module.scss';
import Link from 'next/link';
import { useMemo } from 'react';
import { Genre } from './Genre';

export function MovieInfo(props: any) {
	const directors = useMemo(() => {
		const people = props.item.credits?.crew;

		if (people) {
			return people.filter((person: any) => person.job === 'Director');
		}

		return [];
	}, [props.item.credits?.crew]);

	const links = useMemo(() => {
		const externalIds = props.item.external_ids;
		const homepage = props.item.homepage;
		return homepage
			? {
					...externalIds,
					homepage,
			  }
			: externalIds;
	}, [props.item.external_ids, props.item.homepage]);

	function ProductionCompanies(comps: any[]) {
		return comps.map((c: any) => c.name).join(', ');
	}

	function Director({ person, i }: { person: any; i: number }) {
		return (
			<>
				<Link href={`/person/${person.id}`}>{person.name}</Link>
				{i < directors.length - 1 ? ', ' : ''}
			</>
		);
	}

	return (
		<div className={`spacing ` + styles.info}>
			<div className={styles.left}>
				<div className={styles.poster}>
					<Poster
						path={props.item.poster_path}
						alt={props.item.title || props.item.name}
					/>
					{/* <PlaceholderIcon v-else /> */}
				</div>
			</div>

			<div className={styles.right}>
				{props.item.overview ? (
					<div className={styles.overview}>
						<h2 className={styles.title}>Storyline</h2>

						<div>{props.item.overview}</div>
					</div>
				) : (
					''
				)}
				<div className={styles.stats}>
					<ul className='nolist'>
						{props.item.release_date ? (
							<li>
								<div className={styles.label}>Released</div>

								<div className={styles.value}>
									{formatDate(props.item.release_date)}
								</div>
							</li>
						) : (
							''
						)}
						{props.item.runtime ? (
							<li>
								<div className={styles.label}>Runtime</div>

								<div className={styles.value}>{formatRuntime(props.item.runtime)}</div>
							</li>
						) : (
							''
						)}
						{directors ? (
							<li>
								<div className={styles.label}>Director</div>

								<div className={styles.value}>
									{directors.map((person: any, i: number) => (
										<Director key={person.id} person={person} i={i} />
									))}
								</div>
							</li>
						) : (
							''
						)}
						{props.item.budget ? (
							<li>
								<div className={styles.label}>Budget</div>

								<div className={styles.value}>{formatCurrency(props.item.budget)}</div>
							</li>
						) : (
							''
						)}
						{props.item.revenue ? (
							<li>
								<div className={styles.label}>Revenue</div>

								<div className={styles.value}>{formatCurrency(props.item.revenue)}</div>
							</li>
						) : (
							''
						)}
						{props.item.genres && props.item.genres.length ? (
							<li>
								<div className={styles.label}>Genre</div>

								<div className={styles.value}>
									{props.item.genres.map((genre: any, i: number) => (
										<Genre
											genre={genre}
											i={i}
											key={genre.id}
											genresLength={props.item.genres.length}
										/>
									))}
								</div>
							</li>
						) : (
							''
						)}
						{props.item.status ? (
							<li>
								<div className={styles.label}>Status</div>

								<div className={styles.value}>{props.item.status}</div>
							</li>
						) : (
							''
						)}
						{props.item.original_language ? (
							<li>
								<div className={styles.label}>Language</div>

								<div className={styles.value}>
									{formatLanguage(props.item.original_language)}
								</div>
							</li>
						) : (
							''
						)}
						{props.item.production_companies &&
						props.item.production_companies.length ? (
							<li>
								<div className={styles.label}>Production</div>

								<div className={styles.value}>
									{ProductionCompanies(props.item.production_companies)}
								</div>
							</li>
						) : (
							''
						)}
					</ul>
				</div>

				<div className={styles.external}>{<ExternalLinks links={links} />}</div>
			</div>
		</div>
	);
}
