import React from 'react'
import { Link } from 'react-router-dom';
import "./PopularProducts.css"


function PopularProducts({ movies }) {
  
  const API_IMG = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className='products'>
      <div className="latest__products">
        <h2>Popular Movies</h2>
      </div>
      <div className="product">
        {movies && movies.map(movie =>(
          <div className="card">
            <div className="card__top">
              <Link to={`product/${movie.id}`}>
                <img src={API_IMG + `${movie.poster_path}`} />
              </Link>
            </div>
            <div className="card__body">
              <Link to={`product/${movie.id}`}>
                <h2>{movie.title}</h2>
              </Link>
              <div className="release__date">
                <p>{movie.release_date}</p>
              </div>
              <div className='vote__average'>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularProducts