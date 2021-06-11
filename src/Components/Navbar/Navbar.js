import React from 'react'

export default function Navbar() {
  return (
    <header>
      <h1>Free 2 Game</h1>
      <div>
        <span>Username</span>
        <span>picture</span>
        <div>
          <Link>Wishlist</Link>
          <button>Log out</button>
        </div>
      </div>
    </header>
  )
}
