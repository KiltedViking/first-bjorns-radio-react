import React from 'react'

export default function Album({album, clickHandler}) {
  return (
    <li key={album.id} 
        onClick={(e) => { clickHandler(album.id) }}>
            {album.id}. {album.artist} - {album.title}
    </li>
  )
}
