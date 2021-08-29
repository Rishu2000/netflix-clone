import React, {useState, useEffect} from 'react'
import axios from '../axios';
import "../styles/Row.css"

const Row = ({title, fetchUrl}) => {

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

console.table(movies);

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            <div className="row_posters">
                {/* container -> posters */}
                {movies.map((movie) => (
                    <img className="row_poster" src={`${base_url}${movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
