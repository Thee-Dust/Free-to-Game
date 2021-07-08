import React, { useState, useEffect } from 'react'
import fetchGameData from '../../ApiData/ApiCall'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './GameDetails.css'

export default function GameDetails({ id, addWishlist, wishlist, changeView, view }) {
  const [ freeGame, setFreeGame ] = useState('')
  const [ error, setError ] = useState('')

  const callGames = async (id) => {
    setError('')
    try{
      console.log(id)
      const gameData = await fetchGameData(`game?id=${id}`)
      setFreeGame(gameData)
    }catch (e) {
      setError('Failed to recieve games')
    }
  }

  useEffect(() => {
    callGames(id)
  }, [id])

  if(error){
    return(
      <h1>{error}</h1>
    )
  }

  if(!freeGame && !error) {
    return(
      <div className='loading-box'>
        <h1>Loading....</h1>
        <h2>Asking a nerd for the game info</h2>
      </div>
    )
  }

  if(error){
    return(
      <h1>{error}</h1>
    )
  }

  if(freeGame){
    return (
      <div>
        <Navbar view={view} changeView={changeView}/>
        <div className='details-page'>
          <Link to ='/' onClick={() => changeView(true)} title='Back to home'><i className="fas fa-arrow-left back-button"></i></Link>
          <div className='details-description'>
            <img src={freeGame.thumbnail} alt={`poster for ${freeGame.title}`}/>
            <h1>{freeGame.title}</h1>
            <div className='details-options'>
              <a className='option-bttn' href={freeGame.game_url} title={`${freeGame.title} website`}>Download now</a>
              {!wishlist.includes(freeGame.title)
              ? <button title='save to wishlist' className='option-bttn add-wishlist' onClick={() => addWishlist(freeGame.title)}><i className="far fa-heart"></i>Add to Wishlist</button>
              : <button title='remove to wishlist' className='option-bttn remove-wishlist' style={{background: '#4799EB'}} onClick={() => addWishlist(freeGame.title)}><i className="fas fa-heart">Remove from Wishlist</i></button>}
            </div>
            <div className='game-info'>
              <p>{freeGame.genre}</p>
              <p>{`Developed by ${freeGame.developer}`}</p>
              {freeGame.minimum_system_requirements &&
              <div className='system-req'>
                <h2>System requirements</h2>
                <ul>
                  <li>{`Graphics: ${freeGame.minimum_system_requirements.graphics}`}</li>
                  <li>{`Storage: ${freeGame.minimum_system_requirements.storage}`}</li>
                  <li>{`Memory: ${freeGame.minimum_system_requirements.memory}`}</li>
                  <li>{`Processor: ${freeGame.minimum_system_requirements.processor}`}</li>
                  <li>{`Operating System: ${freeGame.minimum_system_requirements.os}`}</li>
                </ul>
              </div>
              }
            </div>
          </div>
          <div className='game-details'>
            <h2>ABOUT</h2>
            <p>{freeGame.description}</p>
            <h2>{freeGame.title} Screeshots</h2>
            <div className='screen-shots'>
              <img src={freeGame.screenshots[0].image} data-cy='pic1' alt={`screen-shot for ${freeGame.title}`}/>
              <img src={freeGame.screenshots[1].image} data-cy='pic2' alt={`screen-shot for ${freeGame.title}`}/>
              <img src={freeGame.screenshots[2].image} data-cy='pic3' alt={`screen-shot for ${freeGame.title}`}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

GameDetails.propTypes = {
  id: PropTypes.string,
  addWishlist: PropTypes.func,
  wishlist: PropTypes.array,
  changeView: PropTypes.func
}

