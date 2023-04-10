import React from 'react'
import './Footer.css';

function Footer() {

  
  return (
    <footer>
      <div className='footer'>
        <div className='top__look'>
          <div className='item'>
            <h1>Categories</h1>
            <span>Movies</span>
            <span>Series</span>
            <span>Most Popular</span>
            <span>Top Rated</span>
            <span>Coming Soon</span>
          </div>
          <div className='item'>
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className='item'>
            <h1>About</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </span>
          </div>
          <div className='item'>
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </span>
          </div>
        </div>
        <div className='bottom__look'>
          <div className='left__infos'>
            <span className='logo'>Put Locker</span>
            <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
          </div>

          <div className='right__meth'>
            <img src='assets/payment-options.png' alt='' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer