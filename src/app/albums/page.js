"use client";
import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import AlbumList from "@/components/AlbumList";
import SongList from '@/components/SongList';

export default function Albums() {
    const albumData = [
        {
            "id": 1,
            "artist": "Simple Minds",
            "title": "New Gold Dream (81-82-83-84)",
            "media": "CD",
            "releaseYear": "1984"
        },
        {
            "id": 2,
            "artist": "Prince",
            "title": "1999",
            "media": "CD",
            "releaseYear": "1984"
        },
        {
            "id": 3,
            "artist": "Runrig",
            "title": "The Highland Connection",
            "media": "CD",
            "releaseYear": "1981"
        },
    ]

    const songData = [
        {
            "id": 1,
            "albumid": 1,
            "albumOrder": 1,
            "title": "New Gold Dream"
        },
        {
            "id": 2,
            "albumid": 1,
            "albumOrder": 2,
            "title": "New Gold Dream"
        },
        {
            "id": 3,
            "albumid": 2,
            "albumOrder": 1,
            "title": "Little Red Corvette"
        },
    ]

    // TODO: Change to state and implement SongList compontent
    let songs = [];

    const handleClickAlbum = function(key) {
        songs = songData.filter((album) => album.albumid === key);
        console.log(songs);
    }

    return (
        <main className={styles.main}>
            <Link href="./">Home</Link>
            <h1 className={styles.heading}>Albums</h1>
            <AlbumList albumList={albumData} albumClickHandler={handleClickAlbum} />
            <h2 className={styles.heading}>Songs</h2>
            <SongList songList={songs} />
        </main>
    )
}
