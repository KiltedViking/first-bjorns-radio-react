import React from 'react'

export default function Song({song}) {
  return (
    <li key={song.id}>{song.albumOrder}. {song.title}</li>
  )
}
