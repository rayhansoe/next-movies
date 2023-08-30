"use client";
import { usePathname, useRouter } from "next/navigation";
// import { debounce } from "@solid-primitives/scheduled";
// import { createSignal } from "solid-js";
// import { useLocation, useNavigate } from "solid-start";
import styles from "./SearchBox.module.scss";
import { useState } from "react";
import submit from "../action";

export default function SearchBox(props:any) {
  const [value, setValue] = useState(props.value || "");
  const router = useRouter();
  const pathname = usePathname()

  // const update = (newValue: string) => {
  //   if (newValue.length && newValue !== value) {
  //     setValue(newValue);
  //     router.push(`${pathname}?q=${newValue}`);
  //   }
  // };

  // const debouncedUpdate = debounce(update, 500);

  const goBack = () => {
    // !TODO
  };

  
  async function onSubmit(formData: FormData) {
    console.log(formData);
    
    await submit(formData)
    // setMessage(res.message)
  }

  return (
    <>
      <div className={styles.form}>
        <form action={onSubmit} autoComplete="off" onSubmit={(e) => e.preventDefault()}>
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
              //     update(e.currentTarget.value);
              //   }
              // }}
              defaultValue={value}
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
