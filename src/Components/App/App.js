import React, { useState, useEffect }from 'react'
import { Switch, Route } from 'react-router-dom'
import fetchGameData from '../../ApiData/ApiCall'
import cleanGameData from '../../ApiData/CleanApicall'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import GameDetails from '../GameDetails/GameDetails'
import Wishlist from '../Wishlist/Wishlist'
import './App.css'

export default function App() {
  const [ freeGames, setFreeGames] = useState([])
  const [ error, setError ] = useState('')
  const [ wishlist, setWishlist ] = useState([])
  const [ search, setsearch ] = useState('')


  const addWishlist = (gameName) => {
    if(!wishlist.includes(gameName)) {
      setWishlist([...wishlist, gameName])
    } else {
      setWishlist(wishlist.filter(game => game !== gameName))
    }
  }

  const findSearch = (ref) => {
    console.log(ref)
    setsearch(ref)
  }

  useEffect(() => {
    const callGames = async () => {
      setError('')
      try{
        const gameData = await fetchGameData('games?sort-by=alphabetical')
        setFreeGames(cleanGameData(gameData))
      }catch (e){
        setError('Failed to recieve games')
      }
    }
    callGames()
  },[])

  return (
    <main>
      <Navbar findSearch={findSearch}/>
      <Switch>
        <Route exact path ='/'>
          <Home games={freeGames} error={error} searchedGames={search} />
        </Route>
        <Route path='/wishlist'>
          <Wishlist games={freeGames} wishlist={wishlist} error={error}/>
        </Route>
        <Route path="/:id"
        render={({ match }) => {
          const id = match.params.id;
          return <GameDetails id={id} addWishlist={addWishlist} wishlist={wishlist}/>
        }}/>
      </Switch>
    </main>
  )
}

