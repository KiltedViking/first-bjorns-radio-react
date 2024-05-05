import React from 'react'
import Album from './Album'

export default function AlbumList({albumList, albumClickHandler}) {
  return (
    <ul>
        {albumList.map((album) => (
            <Album album={album} key={album.id} clickHandler={albumClickHandler} />
        ))}
    </ul>
  )
}
