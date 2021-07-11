import React from 'react'
import GameCard from '../GameCard/GameCard'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'

export default function Wishlist({ games, wishlist, error, view, changeView }) {
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
    <div className='container'>
      <Navbar changeView={changeView} view={view} />
      <div className='home'>
      {error && <h1>{error}</h1>}
      <h1>WishList</h1>
      {!wishlist.length && !error && <h1>You have nothing in your wishlist</h1>}
      {wishlist.length &&  
        <div className='card-section'>
          {wishedGamesCards}
        </div>}
      </div>
    </div>  
  )
}

Wishlist.propTypes = {
  games: PropTypes.array,
  wishlist: PropTypes.array,
  error: PropTypes.string
};
