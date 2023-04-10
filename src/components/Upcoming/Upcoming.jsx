import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../Context/StateContext';
import "./Upcoming.css"


function Upcoming({}) {

  const { upcoming, setUpcoming } = useContext(Context)

  const API_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=87afcdb32f457fae79d476f835762440"
  const API_IMG = "https://image.tmdb.org/t/p/w500/"

useEffect (() => {
    axios.get(API_UPCOMING)
    .then(resp => setUpcoming(resp.data.results.splice(0, 6)))
    .catch(data => console.log(data))
  }, [])

return (
    <>
      <div className='upcoming__container'>
        <h2>Coming Soon</h2>
        <div className="upcoming__products">
          {upcoming && upcoming.map(movie =>(
            <div className="card">
              <div className="card__top">
                <Link to={`product/${movie.id}`}>
                  <img src={API_IMG + `${movie.poster_path}`} alt="" />
                </Link>
              </div>
              <div className="card__body">
                <Link to={`product/${movie.id}`}>
                  <h2>{movie.title}</h2>
                </Link>
                <div className="release__date">
                  <p>{movie.release_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Upcoming