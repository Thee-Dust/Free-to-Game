import React, { useState, useEffect }from 'react'
import fetchGameData from '../../ApiData/ApiCall'
import cleanGameData from '../../ApiData/CleanApiCall'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import { Switch, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  const [ freeGames, setFreeGames] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const callGames = async () => {
      setError('')
      try{
        const gameData = await fetchGameData()
        setFreeGames(cleanGameData(gameData))
      }catch{
        setError('Failed to recieve games')
      }
    }
    callGames()
  },[])
    

  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path ='/'>
          <Home games={freeGames}/>
        </Route>
      </Switch>
    </main>
  )
}

