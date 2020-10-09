import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Card from '../../components/cards/Card';
import Pagination from '../../components/pagination/Pagination';
import Category from '../../components/category/Category';
import LoadingPulse from '../../assets/loading.svg'

const Index = () => {
    const [movies, setMovies] = useState([]),
        [pages, setPages] = useState(1),
        [limits, setLimits] = useState(10),
        [totalPages, setTotalPages] = useState(1),
        [loading, setLoading] = useState(false);

    const getMovies = async () => {
        setLoading(true)
        try {
            let page = pages
            if (pages === 0) {
                setPages(1)
                page(1)
            }
            let url = `${process.env.REACT_APP_URL}/movie/?page=${page}&limit=${limits}`
            let response = await axios.get(url)
            setMovies(response.data)
            setTotalPages(response.data.length)
            setLoading(false)
            console.log(response, "movie");
        } catch (e) {
            console.log(e.message);
            setLoading(true)
        }
    }

    useEffect(() => {
        getMovies()
    }, []);

    useEffect(() => {
        getMovies()
    }, [pages, limits]);

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
            <Category />
            <section>
                <div className="container">
                    <div className="row">
                        {!loading && movies.length > 0 &&
                            movies.map((movie, index) => {
                                return (
                                    <Card
                                        key={index}
                                        movieId={movie.id}
                                        imageUrl={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                                        title={movie.title}
                                        text={!movie.sypnosis ? 'none' : movie.sypnosis}
                                        rating={movie.sumRating}
                                        director={movie.director}
                                        date={movie.year}
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
                    <Pagination
                        nextPage={nextPage}
                        prevPage={prevPage}
                        pages={pages}
                        totalPages={totalPages}
                    />
                </div>
            </section>
        </>
    );
}

export default Index;
