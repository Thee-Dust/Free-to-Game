import React from 'react'
import GameCard from '../GameCard/GameCard'

export default function Home({ games }) {
  const gameCards = games.map(game => {
    const {id, title, thumbnail, description, genre } = game
    return (
      <GameCard
      key={id}
      id={id}
      title={title}
      thumbnail={thumbnail}
      description={description}
      url={url}
      genre={genre}
      publisher={publisher}
      releaseDate={releaseDate}
      />
    )
  })
  return (
    <div>
      {gameCards}
    </div>
  )
}
