import React from 'react'

export default function SongList({songList}) {
  return (
    <ul>
      {songList.map((song) => {
        <li key={song.id}>{song.title}</li>
      })}
    </ul>
  )
}
