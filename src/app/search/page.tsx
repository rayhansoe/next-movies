import { Card } from '@/components/Card';
import { search } from '@/services/tmdbAPI';
import SearchBox from './__component/SearchBox';
import styles from "./__component/SearchBox.module.scss";
import submit from './action';
import InputBox from './__component/InputBox';

export default async function Search({
	searchParams,
}: {
	searchParams: { q: string };
}) {
  // console.log(searchParams);
	const data = await search(searchParams.q);
  // console.log(data);
  

	return (
		<main className='main'>
			{/* <SearchBox value={searchParams.q || ''} /> */}
			<div className={styles.form}>
        <form action={submit}>
          <label className="visuallyhidden" htmlFor="q">
            Search
          </label>

          <div className={styles.field}>
            <InputBox value={searchParams.q || ''} />
            <button
              v-if="showButton"
              type="button"
              aria-label="Close"
            >
            </button>
          </div>
        </form>
      </div>
			{data && (
				<div className='listing'>
					<div className='listing__head'>
						<h2 className='listing__title'>Searching for {searchParams.q}</h2>
					</div>

					<div className='listing__items'>
						{data.results.map((item: any) => (
							<Card key={item.id} item={item} />
						))}
					</div>
					{/* <pre>{JSON.stringify(data(), null, 2)}</pre> */}

					{/* <div
      v-if="items.page < items.total_pages"
      className="listing__nav">
      <LoadingSpinnerIcon v-if="loading" />
    </div> */}
				</div>
			)}
		</main>
	);
}
