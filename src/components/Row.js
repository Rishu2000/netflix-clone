import React, {useState, useEffect} from 'react'
import axios from '../axios';
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
import "../styles/Row.css"

const Row = ({title, fetchUrl, isLargeRow}) => {

const base_url = 'https://image.tmdb.org/t/p/original/'

const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState(null);

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

const handleClick = (movie) => {
    // console.log(movie?.name);
     if(trailerUrl){
        setTrailerUrl(null);
     }else{
        movieTrailer(movie?.name || movie?.original_title || "")    //Amazing way of getting movie trailer just by using movie name.
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams.get("v"));
            })
            .catch(err => {
                console.log(err);
            })
     }
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
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
