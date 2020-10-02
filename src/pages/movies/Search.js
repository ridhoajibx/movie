import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/cards/Card';
import Carousel from '../../components/carousel/Carousel';
import Pagination from '../../components/pagination/Pagination';
import LoadingPulse from '../../assets/loading.svg';
import Footer from '../../components/footer/Footer';

const Search = (props) => {
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false)

    const { searchMovies } = useParams();

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true)
            try {
                let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${searchMovies}&page=${pages}`
                let response = await axios.get(url)
                setMovies(response.data.results)
                setTotalPages(response.data.total_pages)
                setLoading(false)
            } catch (e) {
                console.log(e.message);
                setLoading(true)
            }
        };
        getMovies()
    }, [searchMovies, pages]);

    const nextPage = (e) => {
        const currentPage = pages;
        if (pages < totalPages) {
            const nextPage = currentPage + 1;
            setPages(nextPage);
        }
    };

    const prevPage = (e) => {
        const currentPage = pages;
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setPages(prevPage);
        }
    };

    return (
        <>
            <Carousel />

            <section className="mb-2">
                <div className="container">
                    <div className="row">
                        <div className="mt-4">
                            <Link to='/' className="btn btn-main">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="mr-1 bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                                Back
                            </Link>
                        </div>
                        <div className="mt-4">
                            <h4 className="title font-weight-bold text-muted">
                                {movies.length === 0 ? `Movies "${searchMovies}"  are undifined !` : `Search Movies : "${searchMovies}"`}
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        {!loading && movies.length > 0 &&
                            movies.map((movie, index) => {
                                return (
                                    <Card
                                        key={index}
                                        movieId={movie.id}
                                        imageUrl={!movie.poster_path ? `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg` :
                                            `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        title={movie.title}
                                        text={movie.overview}
                                        rating={movie.vote_average}
                                        lang={movie.original_language}
                                        date={movie.release_date.slice(0, 4)}
                                    />
                                )
                            })

                        }
                        {loading &&
                            <div className="text-center">
                                <img src={LoadingPulse} style={{ width: '5%' }} alt="Loading..." />
                            </div>
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
            <Footer />
        </>
    );
}

export default Search;

