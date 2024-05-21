import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="header">
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/albums">Albums</Link>
          <span>Songs</span>
          <Link href="/playlists">Playlists</Link>
        </nav>
        <h1 className={styles.header}>Bj&ouml;rn&apos;s Radio</h1>
      </div>

      <div className={styles.description}>
        <h2>About</h2>
        <p>
          Bj&ouml;rn&apos;s Radio is a fictitious radio for persons named  Bj&ouml;rn  
          who live in my flat. ;-)
        </p>
        <p>This application was created to learn how to use React (and Next.js).</p>

        <h3>To&nbsp;do</h3>
        <p>Fix design, switch to getting data from and saving to API, and more.</p>
      </div>
    </main>
  );
}
