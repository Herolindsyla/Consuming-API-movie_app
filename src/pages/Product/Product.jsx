import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Context from '../../Context/StateContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Recommendations from '../../components/Recommendations/Recommendations'
import "./Product.css"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function displayMovie(movie, qty, increaseQty, decreaseQty, onAdd) {

  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return <>
    <div className="prduct__image">
      <img src={API_IMG + `${movie.poster_path}`} alt="" />
    </div>
    <div className="product__details">
      <div className="display_details">
        <div className="movie-title">
          <h3>{movie.title}</h3>
        </div>
        <div className="facts">
          <p>{movie.release_date}</p>
          <p>{movie.genres && movie.genres.map(categories => <span key={categories.iso_639_2}> {categories.name}</span>)}</p>
          <p>{movie.runtime}m</p>
        </div>
        <div className="movie-overview">
          <h4>Overview</h4>
          <p>{movie.overview}</p>
        </div>
        <div className="spoken-lanugages">
          <p>{ movie.spoken_languages && movie.spoken_languages.map(lang => <span className='badge' key={lang.iso_639_1}> {lang.english_name}</span>)}</p>
        </div>
        <div className="qty">
          <h3>Quantity:</h3>
          <div className="qty__desc">
            <span className="minus" onClick={decreaseQty}><AiOutlineMinus /></span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={increaseQty}><AiOutlinePlus /></span>
          </div>
        </div>
        <div className="buttons">
          <button type='button' className='add_to_cart' onClick={() => onAdd(Product, qty)}>Add to Cart</button>
          <button type='button' className='buy_now' onClick="">Buy Now</button>
        </div>
      </div>
    </div>
  </>
}


function Product() {

  const { movie, setMovie, qty, increaseQty, decreaseQty, onAdd } = useContext(Context);

  const {id} = useParams() 
  const API_KEY = 'api_key=87afcdb32f457fae79d476f835762440'
  const BASE_URL = 'https://api.themoviedb.org/3'
  const API_URL = `${BASE_URL}/movie/${id}?${API_KEY}`

  useEffect(() => {
    axios.get(API_URL)
    .then(resp => setMovie(resp.data))
    .catch(data => console.log(data))
  }, [])


  return (
    <>
      <Header />
      <div className='view__product'>
        <div className="view__product_container">
            {
              movie && qty && increaseQty && decreaseQty && onAdd && Product && displayMovie(movie, qty, increaseQty, decreaseQty, onAdd, Product)
            }
        </div>     
      </div>        
      <Recommendations />  
      <Footer />
    </>
  )
}
          
export default Product