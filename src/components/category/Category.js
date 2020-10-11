import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = (props) => {
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        try {
            // ${process.env.REACT_APP_URL}/category
            let response = await axios.get(`${process.env.REACT_APP_URL}/category`)
            setGenres(response.data)
            // console.log(response.data);
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
                                <Link to='/' className={`nav-link tag-category font-weight-bold mb-1 `} >All</Link>
                            </li>
                            {
                                genres.map((genre, index) => {
                                    return (
                                        <li key={ index } className="nav-item">
                                            <Link to={`/category/${genre.id}`} className={`nav-link tag-category font-weight-bold mb-1`} >{genre.genre}</Link>
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