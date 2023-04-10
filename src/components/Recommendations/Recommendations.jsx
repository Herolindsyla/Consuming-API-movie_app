import axios from 'axios';
import { useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/StateContext';
import "./Recommendations.css"


function Recommendations() {

    const { recomm, setRecomm  } = useContext(Context)

    const API_IMG = "https://image.tmdb.org/t/p/w500/"
    const API_RECOMMENDATIONS = "https://api.themoviedb.org/3/movie/now_playing?api_key=87afcdb32f457fae79d476f835762440"

    useEffect(() => {
        axios.get(API_RECOMMENDATIONS)
        .then(resp => setRecomm(resp.data.results.splice(0, 10)))
        .catch(data => console.log(data))
    }, [])

return (
    <>
        <div className="maylike_products">
            <h2>You may also like</h2>
            <div className="marquee">
                <div className="maylike_container track">
                    {recomm && recomm.map(movie => (            
                        <div className="card">
                            <div className="card__top">
                                <Link onClick={() => window.location.href=`/product/${movie.id}`}>
                                    <img src={API_IMG + `${movie.poster_path}`} />
                                </Link>
                            </div>
                            <div className="card__body">
                                <Link onClick={() => window.location.href=`/product/${movie.id}`}>
                                    <h2>{movie.original_title}</h2>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
)
}

export default Recommendations