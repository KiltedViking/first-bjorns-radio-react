// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="header">
        <h1 className={styles.header}>Bj&ouml;rn's Radio</h1>
      </div>

      <div>
        <p><Link href="/albums">Albums</Link></p>  
        <p><Link href="/playlists">Playlists</Link></p>  
      </div>

      <div className={styles.description}>
        <h2>About</h2>
        <p>
          Bj&ouml;rn's Radio is a radio for persons called Bj&ouml;rn and live in
          flat on Torggatan 4. ;-)
        </p>
        <p>This application was created to learn how to use React (and Next.js).</p>
      </div>
    </main>
  );
}
