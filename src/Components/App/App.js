import React, { useState, useEffect }from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthProvider } from '../../Context/AuthContext'
import fetchGameData from '../../ApiData/ApiCall'
import cleanGameData from '../../ApiData/CleanApicall'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import GameDetails from '../GameDetails/GameDetails'
import Wishlist from '../Wishlist/Wishlist'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import './App.css'

export default function App() {
  const [ freeGames, setFreeGames] = useState([])
  const [ error, setError ] = useState('')
  const [ wishlist, setWishlist ] = useState([])
  const [ search, setsearch ] = useState('')
  const [ view , setView] = useState(true)


  const addWishlist = (gameName) => {
    if(!wishlist.includes(gameName)) {
      setWishlist([...wishlist, gameName])
    } else {
      setWishlist(wishlist.filter(game => game !== gameName))
    }
  }

  const findSearch = (ref) => {
    setsearch(ref)
  }

  const changeView = (bool) => {
    setView(bool)
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
      <AuthProvider>
        <Navbar findSearch={findSearch} view={view} changeView={changeView}/>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute 
            exact path ='/'
            component={Home}
            games={freeGames} 
            error={error}
            searchedGames={search} 
            changeView={changeView}
          />
          <PrivateRoute 
            path='/wishlist'
            component={Wishlist} 
            games={freeGames} 
            wishlist={wishlist} 
            error={error}
          />
          <Route path="/:id"
            component={GameDetails} 
            addWishlist={addWishlist} 
            wishlist={wishlist} 
            changeView={changeView}
          />
        </Switch>
      </AuthProvider>
    </main>
  )
}

