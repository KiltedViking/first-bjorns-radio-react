import React from 'react'
import Song from './Song'

export default function SongList({songList}) {
  return (
    <ul>
      {songList.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </ul>
  )
}
