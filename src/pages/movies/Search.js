import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/cards/Card';
import Carousel from '../../components/carousel/Carousel';
import LoadingPulse from '../../assets/loading.svg';
import Footer from '../../components/footer/Footer';

const Search = (props) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)

    const { searchMovies } = useParams();
    // `${process.env.REACT_APP_URL}/movie/search`

    const getMovie = async() => {
        setLoading(true)
        try {
            let res = await axios.get(`${process.env.REACT_APP_URL}/movie/search/?title=${searchMovies}`)
            if (res.status === 201) {
                setMovies(res.data)
                setLoading(false)
            } else {
                throw res
            }
        } catch (e) {
            console.log(e.message);
            setLoading(true)
        }
    }
    
    useEffect(() => {
        getMovie()
    }, [searchMovies])

    return (
        <>
            <Carousel />

            <section className="mb-2">
                <div className="container">
                    <div className="row">
                        <div className="mt-4">
                            <Link to='/' className="btn btn-main align-items-center">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="mr-1 bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                                Back
                            </Link>
                        </div>
                        <div className="mt-4">
                            <h4 className="title font-weight-bold text-muted">
                                {movies ? `Movies "${searchMovies}"  are undifined !` : `Search Movies : "${searchMovies}"`}
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        {!loading && movies &&
                            movies.map((movie, index) => {
                                return (
                                    <Card
                                        key={index}
                                        movieId={movie.id}
                                        imageUrl={!movie.poster ? `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg` :
                                            `${movie.poster}`}
                                        title={movie.title}
                                        text={!movie.synopsis ? 'none' : movie.synopsis}
                                        // trailerUrl={movie.trailer}
                                        date={!movie.year ? 'none' : movie.year.slice(-4)}
                                    />
                                )
                            })

                        }
                        {loading &&
                            <div className="text-center">
                                <img src={LoadingPulse} style={{ width: '5%' }} alt="Loading..." />
                            </div>
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Search;

