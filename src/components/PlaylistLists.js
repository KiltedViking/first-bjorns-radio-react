import React from 'react'
import Playlist from './Playlist'

export default function PlaylistLists({ playlists }) {
  return (
    <ul>
        {playlists.map((playlist) => <Playlist key={playlist.id} playlist={playlist} />)}
    </ul>
  )
}
