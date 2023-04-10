import { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../../Context/StateContext'
import Navbar from '../../components/Navbar/Navbar'
import Cart from '../../components/Cart/Cart'
import './Header.css';
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

function Header() {

  const { showCart, setShowCart, totalQuantities, showMenu, setShowMenu } = useContext(Context);

  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=87afcdb32f457fae79d476f835762440&query"

  // const searchMovie = async(e) => {
    
  //   e.preventDefault()
  //   console.log('Searching')
  //   try{
  //     const url = `https://api.themoviedb.org/3/search/movie?api_key=${query}`;
  //     const resp = await fetch(url)
  //     const data = await resp.json()
  //     console.log(data)
  //     setMovies(data.results)
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  // const changeHandler = (e) => {
  //   setQuery(e.target.value)
  // }

  return (
    <header>
      <Link to='/'> 
        <div className="logo">
          <span>Put Locker</span>
        </div>
      </Link>


      <div className="header__icons">
        <AiOutlineSearch />
        <button type='button' className='cart_icon' onClick={() => setShowCart(true)}><AiOutlineShopping /><span className='cart_item_qty'>{totalQuantities}</span></button>
        <button type='button' className='menu_icon' onClick={() => setShowMenu(true)}><CiMenuFries /></button>
      </div>

      {showCart && <Cart />}
      {showMenu && <Navbar />}
    </header>
  )
}

export default Header