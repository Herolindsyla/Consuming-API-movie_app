import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../Context/StateContext'
import "./Cart.css"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'


function Cart() {

  const { setShowCart, movie, totalQuantities, cartItems, totalPrice, onRemove } = useContext(Context)
  const API_IMG = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className='cart__bg'>
      <div className="cart__container">
        <button type='button' className='cart__heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart_num'> ({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty_cart'>
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty!</h3>
            <Link to='/'>
              <button type='button' className='continue_btn' onClick={() => setShowCart(false)}>CONTINUE SHOPPING</button>
            </Link>
          </div>
        )}

        <div className="align">
          <div className="product__container">
            {cartItems.length >= 1 && cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img src={API_IMG + `${movie.poster_path}`} className='cart_product_img' />
                <div className="item_desc">
                  <div className="item_info">
                    <h5>{movie.title}</h5>
                    <h4>$50</h4>
                  </div>
                  <div className="flex-bottom">
                    <div className="qty__desc">
                      <span className="minus" ><AiOutlineMinus /></span>
                      <span className="num">{item.quantity}</span>
                      <span className="plus" ><AiOutlinePlus /></span>
                    </div>
                    <button type='button' className='remove-item' onClick={() => onRemove(item)}><TiDeleteOutline /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length >= 1 && (
            <div className="cart__bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="btn__container">
                <button type='button' className='check-out' onClick=''>CHECK OUT</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart