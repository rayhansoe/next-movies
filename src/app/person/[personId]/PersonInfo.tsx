/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';
import styles from './PersonInfo.module.scss';
import { ExternalLinks } from '@/components/ExternalLinks';
import { formatDate } from '@/utils/format';

function formatContent(content: string) {
	return content
		.split('\n')
		.filter((section) => section !== '')
		.map((section) => `<p>${section}</p>`)
		.join('');
}

function calculateAge(birthday: string, deathday?: string) {
	const cutoffDate = deathday ? Number(new Date(deathday)) : Date.now();
	const ageDifMs = cutoffDate - Number(new Date(birthday));
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function PersonInfo(props: any) {
	const profilePath = props.person.profile_path;

	const links = useMemo(() => {
		const externalIds = props.person.external_ids;
		const homepage = props.person.homepage;
		return homepage
			? {
					...externalIds,
					homepage,
			  }
			: externalIds;
	}, [props.person.external_ids, props.person.homepage]);

	return (
		<div className={`spacing ${styles.info}`}>
			<div className={styles.left}>
				<div className={styles.poster}>
					{profilePath ? (
						<img
							src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2' + profilePath}
							alt={props.person.name}
						/>
					) : (
						''
					)}
				</div>
			</div>

			<div className={styles.right}>
				<div className={styles.overview}>
					<h2 className={styles.title}>{props.person.name}</h2>

					{props.person.biography ? (
						<>
							{profilePath ? (
								<img
									src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2' + profilePath}
									alt={props.person.name}
								/>
							) : (
								''
							)}
							<div dangerouslySetInnerHTML={{__html: formatContent(props.person.biography)}} />
						</>
					) : (
						''
					)}
				</div>

				<div className={styles.stats}>
					<ul className='nolist'>
						{props.person.known_for_department ? (
							<li>
								<div className={styles.label}>Known For</div>
								<div className={styles.value}>{props.person.known_for_department}</div>
							</li>
						) : (
							''
						)}

						{props.person.birthday ? (
							<li>
								<div className={styles.label}>Born</div>
								<div className={styles.value}>
									{formatDate(props.person.birthday)}{' '}
									{!props.person.deathday ? (
										<>(age {calculateAge(props.person.birthday)})</>
									) : (
										''
									)}
								</div>
							</li>
						) : (
							''
						)}

						{props.person.place_of_birth ? (
							<li>
								<div className={styles.label}>Place of Birth</div>
								<div className={styles.value}>{props.person.place_of_birth}</div>
							</li>
						) : (
							''
						)}

						{props.person.deathday ? (
							<li>
								<div className={styles.label}>Died</div>
								<div className={styles.value}>
									{formatDate(props.person.deathday)}{' '}
									{props.person.birthday ? (
										<>(age {calculateAge(props.person.birthday, props.person.deathday)})</>
									) : (
										''
									)}
								</div>
							</li>
						) : (
							''
						)}
					</ul>
				</div>

				<div className={styles.external}>
					<ExternalLinks media='person' links={links} />
				</div>
			</div>
		</div>
	);
}
