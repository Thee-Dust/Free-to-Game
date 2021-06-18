import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ findSearch, view, changeView }) {
  const searchRef = useRef()

  return (
    <header>
      <Link to='/' onClick={() => changeView(true)}><h1>Game 4 Free</h1></Link>
      <div className='head-options'>
        { view && <input type='text' ref={searchRef} onChange={(() => findSearch(searchRef.current.value))} placeholder='Search games'></input>}
        <ul className="user-display">
          <li><span>UserName</span>
            <ul className='user-options'>
              <li><Link to='/wishlist' onClick={() => changeView(false)}>Wishlist</Link></li>
              <li><span>Log out</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  findSearch: PropTypes.func,
  view: PropTypes.bool,
  changeView: PropTypes.func
};

