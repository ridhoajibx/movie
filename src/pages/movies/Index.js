import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Card from '../../components/cards/Card';

const Index = () => {
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=605dcb7e5df74d03840b53d880bd4319&page=1`)
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
