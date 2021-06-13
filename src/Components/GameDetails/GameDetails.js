import React, { useState, useEffect } from 'react'
import fetchGameData from '../../ApiData/ApiCall'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './GameDetails.css'

export default function GameDetails({ id, addWishlist, wishlist }) {
  const [ freeGame, setFreeGame ] = useState('')
  const [ error, setError ] = useState('')

  const callGames = async (id) => {
    setError('')
    try{
      const gameData = await fetchGameData(`game?id=${id}`)
      setFreeGame(gameData)
    }catch (e) {
      setError('Failed to recieve games')
    }
  }

  useEffect(() => {
    callGames(id)
  }, [id])

  if(freeGame){
    return (
      <div className='details-page'>
        <Link to ='/'><i className="fas fa-arrow-left back-button"></i></Link>
        <div className='details-description'>
          <img src={freeGame.thumbnail} alt={`poster for ${freeGame.title}`}/>
          <h1>{freeGame.title}</h1>
          <div className='details-options'>
            <button className='option-bttn'><a href={freeGame.game_url}>Download now</a></button>
            {!wishlist.includes(freeGame.title)
            ? <button className='option-bttn download' onClick={() => addWishlist(freeGame.title)}><i className="far fa-heart"></i>Add to Wishlist</button>
            : <button className='option-bttn' style={{background: '#4799EB'}} onClick={() => addWishlist(freeGame.title)}><i className="fas fa-heart"></i></button>}
          </div>
          <div className='game-info'>
            <p>{freeGame.genre}</p>
            <p>{`Developed by ${freeGame.developer}`}</p>
            <div className='system-req'>
              <h2>System requirements:</h2>
              <ul>
                <li>{`Graphics: ${freeGame.minimum_system_requirements.graphics}`}</li>
                <li>{`Storage: ${freeGame.minimum_system_requirements.storage}`}</li>
                <li>{`Memory: ${freeGame.minimum_system_requirements.memory}`}</li>
                <li>{`Processor: ${freeGame.minimum_system_requirements.processor}`}</li>
                <li>{`Operating System: ${freeGame.minimum_system_requirements.os}`}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='game-details'>
          <h2>ABOUT</h2>
          <p>{freeGame.description}</p>
          <h2>{freeGame.title} Screeshots</h2>
          <div className='screen-shots'>
            <img src={freeGame.screenshots[0].image} alt={`screen-shot for ${freeGame.title}`}/>
            <img src={freeGame.screenshots[1].image} alt={`screen-shot for ${freeGame.title}`}/>
            <img src={freeGame.screenshots[2].image} alt={`screen-shot for ${freeGame.title}`}/>
          </div>
        </div>
      </div>
    )
  }
  return null
}

GameDetails.propTypes = {
  id: PropTypes.string,
  addWishlist: PropTypes.func,
  wishlist: PropTypes.array
}

