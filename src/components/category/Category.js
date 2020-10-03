import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = (props) => {
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}`)
            setGenres(response.data.genres)
        } catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        getGenres()
    }, []);
    return (
        <section className="mb-2">
            <div className="container">
                <div className="row">
                    <div className="mt-4">
                        <h4 className="title font-weight-bold text-muted">Browse by category</h4>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <div className={`nav-link tag-category font-weight-bold mb-1 ${props.category === 'all' ? 'active' : ''}`} onClick={() => props.setCategory('all')} >All</div>
                            </li>
                            {
                                genres.map((genre, index) => {
                                    return (
                                        <li key={ index } className="nav-item">
                                            <div className={`nav-link tag-category font-weight-bold mb-1 ${props.category === genre.id ? 'active' : ''}`} onClick={() => props.setCategory(genre.id)} >{genre.name}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;