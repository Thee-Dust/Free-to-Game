import React, { useState, useEffect }from 'react'
import fetchGameData from '../ApiData/ApiCall'
import cleanGameData from '../ApiData/CleanApicall'
import './App.css'

export default function App() {
  const [ freeGames, setFreeGames] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    callGames()
  },[freeGames])

  callGames = async () => {
    try{
      const gameData = fetchGameData()
      setFreeGames(cleanGameData(gameData))
    }catch{

    }
  }
  return (
    <div>
      
    </div>
  )
}
