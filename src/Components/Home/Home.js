import React from 'react'

export default function Home({ games }) {
  const gameCards = games.map(game => {
    const {id, title, thumbnail, description, url, genre, publisher, releaseDate} = game
    return (
      <GameCards
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
      
    </div>
  )
}
