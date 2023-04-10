import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../Context/StateContext'
import './Navbar.css'
import { AiOutlineLeft } from "react-icons/ai";


function Navbar() {

  const { setShowMenu } = useContext(Context);

  return (
    <div className="nav__bg">
      <div className="nav__container">
      <button type='button' className='' onClick={() => setShowMenu(false)}>
        <AiOutlineLeft />
      </button>
      <nav>
          <ul>
            <li><Link to="/" onClick={() => setShowMenu(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setShowMenu(false)}>Movies</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar