import React from 'react'

export default function Playlist({ playlist }) {
  return (
    <ul>{playlist.name} - {playlist.playDate}</ul>
  )
}
