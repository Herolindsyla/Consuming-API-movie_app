import { useContext } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Context from '../../Context/StateContext';
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import Upcoming from '../../components/Upcoming/Upcoming';
import Footer from '../../components/Footer/Footer'
import './Home.css'



function Home() {

  const { movies, setMovies } = useContext(Context)

  const API_KEY = 'api_key=87afcdb32f457fae79d476f835762440'
  const BASE_URL = 'https://api.themoviedb.org/3'
  const API_URL = `${BASE_URL}/movie/popular?${API_KEY}`

  useEffect (() => {
    axios.get(API_URL)
    .then(resp => setMovies(resp.data.results.splice(0, 10)))
    .catch(data => console.log(data))
  }, [])

  return (
    <>
      <Header />
      <Slider />
      <PopularProducts movies={movies}/>
      <Upcoming />
      <Footer />
    </>
  )
}

export default Home