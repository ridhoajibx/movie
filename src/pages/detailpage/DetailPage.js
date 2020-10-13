import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Footer from '../../components/footer/Footer';
import HeroDetail from './components/HeroDetail';
import Navpills from './components/Navpills';
import { useEffect } from 'react';

const DetailPage = () => {
    const [movie, setMovie] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [pages, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(10);

    let { identifier } = useParams();
    
    const getMovie = async () => {
        try {
            let url = `${process.env.REACT_APP_URL}/movie/search/${identifier}`
            let res = await axios.get(url)
            if(res.status === 201){
                setMovie(res.data);
                console.log("movie", res.data);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    const getCharacters = async () => {
        try {
            let url = `${process.env.REACT_APP_URL}/character/find/${identifier}`
            let res = await axios.get(url)
            if(res.status === 200){
                setCharacters(res.data);
                console.log("char", res);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    const getReviews = async () => {
        try {
            let page = pages
            if (pages === 0) {
                setPages(1)
                page(1)
            }
            let url = `${process.env.REACT_APP_URL}/review/${identifier}?page=${page}&limit=${limit}`
            let res = await axios.get(url)
            if(res.status === 200){
                setReviews(res.data);
                setTotalPages(res.data.length)
                console.log("review", res);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

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

    useEffect(()=>{
        getMovie()
    }, [identifier])

    useEffect(()=>{
        getCharacters()
    }, [identifier])

    useEffect(()=>{
        getReviews()
    }, [])
    useEffect(()=>{
        getReviews()
    }, [identifier, pages, limit])

    return (
        <div>
            <HeroDetail 
                movie={movie}
            />
            <Navpills
                movie={movie}
                characters={characters}
                reviews={reviews}
                pages={pages}
                totalPages={totalPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
            <Footer />
        </div>
    );
}

export default DetailPage;
