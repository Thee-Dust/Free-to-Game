import React from 'react'
import GameCard from '../GameCard/GameCard'
import PropTypes from 'prop-types'
import './Home.css'

export default function Home({ games, error }) {
  const gameCards = games.map(game => {
    const {id, title, thumbnail, description, genre } = game
    return (
      <GameCard
      key={id}
      id={id}
      title={title}
      thumbnail={thumbnail}
      description={description}
      genre={genre}
      />
    )
  })
  return (
    <div className='home'>
      {error && <h1>{error}</h1>}
      <div className='card-section'>
        {gameCards}
      </div>
    </div>
  )
}

Home.prototype = {
  games: PropTypes.array,
  error: PropTypes.string
};
