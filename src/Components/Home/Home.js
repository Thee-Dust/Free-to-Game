import React from 'react'
import GameCard from '../GameCard/GameCard'

export default function Home({ games }) {
  const gameCards = games.map(game => {
    const {id, title, thumbnail, description, url, genre, publisher, releaseDate} = game
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
    <div>
      {gameCards}
    </div>
  )
}
