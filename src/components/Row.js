import React, {useState, useEffect} from 'react'
import axios from '../axios';
import Youtube from "react-youtube"
import "../styles/Row.css"

const Row = ({title, fetchUrl, isLargeRow}) => {

const base_url = 'https://image.tmdb.org/t/p/original/'

const [movies, setMovies] = useState([]);

// A snippet of code which runs based on a specific conditions.
useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);      //This function is dependent on fetchUrl.
        // console.log(request.data.results);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
},[fetchUrl])

const opts = {
    height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
}

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            <div className="row_posters">
                {/* container -> posters */}
                {movies.map((movie) => (
                    <img 
                        key={movie.id} 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
            <Youtube videoId='2g811Eo7K8U' opts={opts}/>
        </div>
    )
}

export default Row
