"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { debounce } from "@solid-primitives/scheduled";
// import { createSignal } from "solid-js";
// import { useLocation, useNavigate } from "solid-start";
import styles from "./SearchBox.module.scss";
import { useEffect, useState } from "react";
// import submit from "../action";

export default function SearchBox(props:any) {
  const [value, setValue] = useState(props.value || "");
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();

  useEffect(() => {
    setValue(searchParams?.get('q') || '');
  }, [searchParams]);

  const update = (newValue: string) => {
    if (newValue.length && newValue !== value) {
      setValue(newValue);
      router.push(`${pathname}?q=${newValue}`);
    }
  };

  // const debouncedUpdate = debounce(update, 500);

  const goBack = () => {
    // !TODO
  };

  
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.q as HTMLInputElement;
    // const newParams = new URLSearchParams(searchParams.toString());

    // if (search.value) {
    //   newParams.set('q', search.value);
    // } else {
    //   newParams.delete('q');
    // }

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
              // keyup="goToRoute"
              // blur="unFocus"
              // onInput={(e) => debouncedUpdate(e.currentTarget.value)}
              // onKeyUp={(e) => {
              //   e.preventDefault();
              //   if (e.key === "Enter") {
              //     // debouncedUpdate.clear();
              //     update(e.currentTarget.value);
              //   }
              // }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              v-if="showButton"
              type="button"
              aria-label="Close"
              onClick={goBack}
            >
              {/* <CrossIcon /> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
