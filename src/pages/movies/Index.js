import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Card from '../../components/cards/Card';

const Index = () => {
    const [movies, setMovies] = useState([])
    
    const getMovies = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`)
            setMovies(response.data.results)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getMovies()
    });
    return (
        <div className="row">
            {
                movies.map((movie, index) => {
                    return (
                        <Card
                            key={index}
                            movieId={ movie.id }
                            imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            title={movie.title}
                            text={movie.overview}
                            rating={movie.vote_average}
                            lang={movie.original_language}
                            date={movie.release_date.slice(0, 4)}
                        />
                    )
                })
            }
        </div>
    );
}

export default Index;
