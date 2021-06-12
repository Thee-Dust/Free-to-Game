import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <Link to='/'><h1>Free 2 Game</h1></Link>
      <div className="user-display">
        <span>picture
          <ul className='user-options'>
            <li><Link to='/wishlist'>Wishlist</Link></li>
            <li><button>Log out</button></li>
          </ul>
        </span>
      </div>
    </header>
  )
}
