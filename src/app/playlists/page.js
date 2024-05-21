import React from 'react'
import Link from 'next/link'
import styles from "./page.module.css";
import PlaylistLists from '@/components/PlaylistLists';

export default function Playlists() {
    const playlistData = [
        {
            "id": 1,
            "name": "The Red list",
            "playDate": "2024-05-01",
            "songs": [1, 2, 3]
        },
        {
            "id": 2,
            "name": "The Nationalist list",
            "playDate": "2024-06-06",
            "songs": [3, 4, 5]
        },
    ]
  return (
    <main className={styles.main}>
        <Link href="./">Home</Link>
        <h1 className={styles.heading}>Playlists</h1>
        <PlaylistLists playlists={ playlistData } />
    </main>
  )
}
