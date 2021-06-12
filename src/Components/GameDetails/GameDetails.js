import React, { useState, useEffect } from 'react'
import fetchGameData from '../../ApiData/ApiCall'
import { Link } from 'react-router-dom'
import './GameDetails.css'

export default function GameDetails({ id, addWishlist, wishlist }) {
  const [ freeGame, setFreeGame ] = useState('')
  const [ error, setError ] = useState('')

  useEffect(() => {
    const callGames = async () => {
      setError('')
      try{
        const gameData = await fetchGameData(`game?id=${id}`)
        setFreeGame(gameData)
      }catch{
        setError('Failed to recieve games')
      }
    }
    callGames()
  },[id])


  if(freeGame){
    console.log(freeGame)
    return (
      <div className='details-page'>
        <Link to ='/'><i className="fas fa-arrow-left back-button"></i></Link>
        <div className='details-options'>
        <img src={freeGame.thumbnail} alt={`poster for ${freeGame.title}`}/>
          <h1>{freeGame.title}</h1>
          <div>
            {!wishlist.includes(freeGame.title)
            ? <button onClick={() => addWishlist(freeGame.title)}><i className="far fa-heart"></i>Add to Wishlist</button>
            : <button onClick={() => addWishlist(freeGame.title)}><i class="fas fa-heart"></i></button>}
          <a href={freeGame.game_url}>Download now</a>
          <div>
            <p>{freeGame.genre}</p>
            <p>{`Developed by ${freeGame.developer}`}</p>
            <span>System requirements:</span>
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
          <div>
            <h2>{freeGame.title} ScreenShots</h2>
            <img src={freeGame.screenshots[0].image}/>
            <img src={freeGame.screenshots[1].image}/>
            <img src={freeGame.screenshots[2].image}/>
          </div>
        </div>
      </div>
    )
  }
  return null
}


