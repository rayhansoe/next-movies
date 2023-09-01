// import { A, Outlet } from "solid-start";
// import GitHubIcon from "~icons/ant-design/github-filled";
// import EmailIcon from "~icons/ant-design/mail-filled";
// import TwitterIcon from "~icons/ant-design/twitter-outlined";
import {
	AiFillGithub,
	AiFillMail,
	AiOutlineTwitter,
} from 'react-icons/ai';
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} The Nuxt Movies authors. All rights
        reserved.&nbsp;
        <a
          target="_blank"
          href="https://jason.codes/cookie-policy"
          rel="noopener"
        >
          Cookie Policy
        </a>
        .
      </p>
      <p>
        Designed by the Nuxt Movies authors, and ported by the Solid Movies
        authors, and re-ported using the nextjs app router by me, with the original data provided by&nbsp;
        <a target="_blank" href="https://www.themoviedb.org/" rel="noopener">
          TMDb
        </a>
        .
      </p>

      <ul className="nolist">
        <li>
          <a
            href="https://twitter.com/rayhansoe"
            target="_blank"
            aria-label="Link to Twitter account"
            rel="noopener"
          >
            <AiOutlineTwitter style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rayhansoe/next-movies"
            target="_blank"
            aria-label="Link to GitHub account"
            rel="noopener"
          >
            <AiFillGithub style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li>
          <a
            href="mailto:rayhan.rhssoe2@gmail.com"
            aria-label="Link to Email"
            rel="noopener"
          >
            <AiFillMail style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
