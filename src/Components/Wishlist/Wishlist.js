import React from 'react'

export default function Wishlist({ games, wishlist }) {
  const wishlistGames = games.filter(game => wishlist.includes(game.title))
  const wishedGamesCards = wishlistGames.map(game => {
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
    <div className='card-section'>
      {wishedGamesCards}
    </div>
  )
}
