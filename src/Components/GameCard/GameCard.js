import React from 'react'

export default function GameCard({ thumbnail, description, title, genre, id }) {
  return (
    <div id={id}>
      <img src={thumbnail} alt={`Poster for ${title}`}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{genre}</p>
    </div>
  )
}
