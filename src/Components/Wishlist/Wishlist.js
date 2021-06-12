import React from 'react'

export default function Wishlist({ games, wishlist, error }) {
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
    <>
      {error && <h1>{error}</h1>}
      {!wishlist.length && !error && <h1>You have nothing in your wishlist</h1>}
      {wishlist.length &&  
        <div className='card-section'>
          {wishedGamesCards}
        </div>}
    </>
  )
}
