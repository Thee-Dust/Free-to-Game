import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.css'

export default function GameCard({ thumbnail, description, title, genre, id }) {
  return (
    <Link to={`/${id}`} className='card'>
      <img src={thumbnail} alt={`Poster for ${title}`}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{genre}</p>
    </Link>
  )
}
