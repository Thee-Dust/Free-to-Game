import React from 'react'
import { Link } from 'react-router-dom'

export default function GameCard({ thumbnail, description, title, genre }) {
  return (
    <Link to=':id'>
      <img src={thumbnail} alt={`Poster for ${title}`}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{genre}</p>
    </Link>
  )
}
