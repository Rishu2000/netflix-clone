import React, {useState, useEffect} from 'react'
import axios from '../axios';

const Row = ({title, fetchUrl}) => {

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

    return (
        <div>
            {/* title */}
            <h2>{title}</h2>
            {/* container -> posters */}
        </div>
    )
}

export default Row
