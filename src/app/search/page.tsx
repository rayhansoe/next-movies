import { Card } from '@/components/Card';
import { search } from '@/services/tmdbAPI';
import SearchBox from './__component/SearchBox';
import styles from "./__component/SearchBox.module.scss";
import submit from './action';

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
			<SearchBox value={searchParams.q || ''} />
			{/* <div className={styles.form}>
        <form action={submit} autoComplete="off">
          <label className="visuallyhidden" htmlFor="q">
            Search
          </label>

          <div className={styles.field}>
            <input
              id="q"
              name="q"
              type="text"
              placeholder="Search for a movie, tv show or person..."
              // keyup="goToRoute"
              // blur="unFocus"
              // onInput={(e) => debouncedUpdate(e.currentTarget.value)}
              // onKeyUp={(e) => {
              //   e.preventDefault();
              //   if (e.key === "Enter") {
              //     // debouncedUpdate.clear();
              //     // update(e.currentTarget.value);
              //   }
              // }}
              defaultValue={searchParams.q}
            />
            <button
              v-if="showButton"
              type="button"
              aria-label="Close"
              // onClick={goBack}
            >
              <CrossIcon />
            </button>
          </div>
        </form>
      </div> */}
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
