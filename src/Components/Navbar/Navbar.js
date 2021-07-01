import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import './Navbar.css'

export default function Navbar({ findSearch, view, changeView }) {
  const searchRef = useRef()
  const { signOut } = useAuth()
  const history = useHistory()

  async function handleLogout(e) {
    e.preventDefault()
    try{
      await signOut()
      history.push('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <header>
      <Link to='/' title='Game 4 Free' onClick={() => changeView(true)}><h1>Game 4 Free</h1></Link>
      <div className='head-options'>
        { view && <input type='text' ref={searchRef} onChange={(() => findSearch(searchRef.current.value))} placeholder='Search games'></input>}
        <ul className="user-display">
          <li><span>UserName<i className="fas fa-caret-down icon"></i></span>
            <ul className='user-options'>
              <li><Link to='/wishlist' title='Wishlist' onClick={() => changeView(false)}><i className="fas fa-heart icon"></i>Wishlist</Link></li>
              <li><button title='Sign out' onClick={handleLogout}><i className="fas fa-sign-out-alt icon"></i>Sign out</button></li>
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

