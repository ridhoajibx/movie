import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Carousel from '../../components/carousel/Carousel'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'
import Card from '../../components/cards/Card';
import LoadingPulse from '../../assets/loading.svg'


export default function MovieCategory() {
    const [movies, setMovies] = useState([]),
        [loading, setLoading] = useState(false);

    const { category } = useParams();

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true)
            try {
                let url = `${process.env.REACT_APP_URL}/category/find/${category}`
                let response = await axios.get(url)
                setMovies(response.data)
                // console.log(response.data);
                setLoading(false)
            } catch (e) {
                console.log(e.message);
                setLoading(true)
            }
        }
        getMovies()
    }, [category]);
    // console.log(movies);
    return (
        <div>
            <Carousel />
            <Category />
            <section>
                <div className="container">
                    <div className="row">
                        {!loading && movies &&
                            movies.map((movie, index) => {
                                return (
                                    <Card
                                        key={index}
                                        movieId={movie.MovieId}
                                        imageUrl={!movie.Movie.poster ? null : movie.Movie.poster}
                                        title={movie.Movie.title}
                                        text={!movie.Movie.synopsis ? 'none' : movie.Movie.synopsis}
                                        reviews={movie.Movie.Reviews}
                                        // lang={movie.original_language}
                                        date={!movie.Movie.year ? 'none' : movie.Movie.year.slice(-4)}
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
        </div>
    )
}
