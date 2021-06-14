import React from 'react'
import GameCard from '../GameCard/GameCard'
import PropTypes from 'prop-types'
import './Home.css'

export default function Home({ games, error, searchedGames, changeView }) {

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
      changeView={changeView}
      />
    )
  })

  if(searchedGames){
    const searchResults = gameCards.filter(game => game.props.title.toLowerCase().includes(searchedGames.toLowerCase()))
    return(
      <div className='home'>
        {!searchResults.length && <h1>It looks like no movies match your search. Please try searching something else</h1>}
        <div className='card-section'>
        {searchResults}
        </div>
      </div>
    )
  }

  return (
    <div className='home'>
      {error && <h1>{error}</h1>}
      {!games && !error &&
      <div className='loading-box'>
        <h1>Loading....</h1>
        <h2>Going to Gamestop to fetch the games</h2>
      </div>}
      <div className='card-section'>
        {gameCards}
      </div>
    </div>
  )
}

Home.propTypes = {
  games: PropTypes.array,
  error: PropTypes.string,
  searchedGames: PropTypes.string,
  changeView: PropTypes.func
};
