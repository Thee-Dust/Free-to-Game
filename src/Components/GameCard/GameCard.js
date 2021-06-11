import React from 'react'

export default function GameCard({ thumbnail, description, title }) {
  return (
    <div>
      <img src={thumbnail} alt={`Poster for ${title}`}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
