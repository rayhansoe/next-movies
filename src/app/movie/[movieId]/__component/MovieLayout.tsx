"use client"

import Hero from "@/components/Hero"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import styles from '../[movieId].module.scss';

export function MovieLayout({data}: {data: any}) {
  const pathname = usePathname()

  return (
    <>
    {data ? <Hero item={data?.item} /> : ''}
			<div className={`spacing ${styles.nav}`}>
				<Link
					href={`/movie/${useParams().movieId}`}
					className={`${styles.button} ${pathname === `/movie/${useParams().movieId}` ? styles.buttonActive : ''}`}
				>
					Overview
				</Link>
				<Link
					href={`/movie/${useParams().movieId}/photos`}
					className={`${styles.button} ${pathname === `/movie/${useParams().movieId}/photos` ? styles.buttonActive : ''}`}
				>
					Photos
				</Link>
			</div>
    </>
  )
}