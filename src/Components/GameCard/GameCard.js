import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './GameCard.css'

export default function GameCard({ thumbnail, description, title, genre, id ,changeView}) {
  function truncateString(str) {
    return str.slice(0, 50) + '...'
  }
  return (
    <Link to={`/${id}`} className='card' onClick={() => changeView(false)} id={id}>
      <img src={thumbnail} alt={`Poster for ${title}`} className='card-img'></img>
      <div className='card-detail'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-descrip'>{truncateString(description)}</p>
        <p className='card-genre'>{genre}</p>
      </div>
    </Link>
  )
}

GameCard.propTypes = {
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.number,
  changeView: PropTypes.func
}