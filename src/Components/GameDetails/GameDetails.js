import React from 'react'
import { Link } from 'react-router-dom'

export default function GameDetails({ game }) {
  
  return (
    <div>
      <Link to ='/'><i className="fas fa-arrow-left"></i></Link>
      <img src={thumbnail} alt={`poster for ${title}`} />
      <a href={url}>Download now</a>
      <button>Add to Wishlist</button>
      <span>{title}</span>
      <p>{description}</p>
      <p>{genre}</p>
      <p>{developer}</p>
      <p>{releaseDate}</p>
    </div>
  )
}
