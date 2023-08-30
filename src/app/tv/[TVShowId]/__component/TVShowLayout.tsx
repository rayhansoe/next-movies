"use client"

import Hero from "@/components/Hero"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import styles from '../[TVShowId].module.scss';

export function TVShowLayout({data}: {data: any}) {
  const pathname = usePathname()

  return (
    <>
    {data ? <Hero item={data?.item} /> : ''}
			<div className={`spacing ${styles.nav}`}>
				<Link
					href={`/tv/${useParams().TVShowId}`}
					className={`${styles.button} ${pathname === `/tv/${useParams().TVShowId}` ? styles.buttonActive : ''}`}
				>
					Overview
				</Link>
				<Link
					href={`/tv/${useParams().TVShowId}/photos`}
					className={`${styles.button} ${pathname === `/tv/${useParams().TVShowId}/photos` ? styles.buttonActive : ''}`}
				>
					Photos
				</Link>
			</div>
    </>
  )
}