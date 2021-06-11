import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <Link>Free 2 Game</Link>
      <div>
        <span>Username</span>
        <span>picture</span>
        <div>
          <span>Wishlist</span>
          <button>Log out</button>
        </div>
      </div>
    </header>
  )
}
