"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./SearchBox.module.scss";
import { useEffect, useState } from "react";

export default function SearchBox(props:any) {
  const [value, setValue] = useState(props.value || "");
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();

  useEffect(() => {
    setValue(searchParams?.get('q') || '');
  }, [searchParams]);
  
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.q as HTMLInputElement;

    router.push(`${pathname}?q=${search.value || value}`);
  }

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <label className="visuallyhidden" htmlFor="q">
            Search
          </label>

          <div className={styles.field}>
            <input
              autoComplete="off"
              id="q"
              name="q"
              type="text"
              placeholder="Search for a movie, tv show or person..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
