import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Card from '../../components/cards/Card';
import Pagination from '../../components/pagination/Pagination';
import Category from './Category';

const Index = () => {
    const [movies, setMovies] = useState([])
    const [moviesCategory, setMoviesCategory] = useState([])
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [active, setActive] = useState('')

    const getMovies = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&page=${pages}`)
            setMovies(response.data.results)
            setTotalPages(response.data.total_pages)
            setActive('all')
        } catch (e) {
            console.log(e.message);
        }
    }

    const getMoviesCategory = async (genreId) => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=${genreId}&page=${pages}`)
            setMoviesCategory(response.data.results)
            setMovies(response.data.results)
            setTotalPages(response.data.total_pages)
            setActive(genreId)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getMovies()
    }, [pages]);

    const nextPage = (e) => {
        e.preventDefault()
        const currentPage = pages;
        if (pages < totalPages) {
            const nextPage = currentPage + 1;
            setPages(nextPage);
        }
    };

    const prevPage = (e) => {
        e.preventDefault()
        const currentPage = pages;
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setPages(prevPage);
        }
    };
    return (
        <>
            <Category
                getCategory={getMoviesCategory}
                getMovies={getMovies}
                active={active}
            />
            <section>
                <div className="container">
                    <div className="row">
                        { movies &&
                            movies.map((movie, index) => {
                                return (
                                    <Card
                                        key={index}
                                        movieId={movie.id}
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
                        <Pagination
                            nextPage={nextPage}
                            prevPage={prevPage}
                            pages={pages}
                            totalPages={totalPages}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
