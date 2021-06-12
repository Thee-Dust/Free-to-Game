import React, { useState, useEffect }from 'react'
import { Switch, Route } from 'react-router-dom'
import fetchGameData from '../../ApiData/ApiCall'
import cleanGameData from '../../ApiData/CleanApicall'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import GameDetails from '../GameDetails/GameDetails'
import './App.css'

export default function App() {
  const [ freeGames, setFreeGames] = useState([])
  const [ error, setError ] = useState('')
  const [ wishlist, setWishlist ] = useState([])

  useEffect(() => {
    const callGames = async () => {
      setError('')
      try{
        const gameData = await fetchGameData('games?sort-by=alphabetical')
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
        <Route path="/:id"
        render={({ match }) => {
          const id = parseInt(match.params.id);
          return <GameDetails id={id}/>
        }}/>
      </Switch>
    </main>
  )
}

