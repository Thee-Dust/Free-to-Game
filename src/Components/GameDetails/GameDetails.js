import React, { useState, useEffect } from 'react'
import fetchGameData from '../../ApiData/ApiCall'
import { Link } from 'react-router-dom'

export default function GameDetails({ id }) {
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
      <div>
        <Link to ='/'><i className="fas fa-arrow-left"></i></Link>
        <img src={freeGame.thumbnail} alt={`poster for ${freeGame.title}`}/>
        <div>
          <h2>{freeGame.title}</h2>
          <div>
          <button>Add to wishlist</button>
          <a href={freeGame.game_url}>Download now</a>
          </div>
        </div>
        <div>
          <p>{freeGame.description}</p>
          <div>
            <span>ABOUT</span>
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
    )
  }
  return null
}
