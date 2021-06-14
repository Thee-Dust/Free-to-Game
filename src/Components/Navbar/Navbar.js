import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ findSearch }) {
  const searchRef = useRef()
  return (
    <header>
      <Link to='/'><h1>Free 2 Game</h1></Link>
      <input type='text' ref={searchRef} onChange={(() => findSearch(searchRef.current.value))} placeholder='Search games here'></input>
      <ul className="user-display">
        <li><span>UserName</span>
          <ul className='user-options'>
            <li><Link to='/wishlist'>Wishlist</Link></li>
            <li><span>Log out</span></li>
          </ul>
        </li>
      </ul>
    </header>
  )
}
