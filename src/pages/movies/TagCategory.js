import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavPills from '../../components/navpills/NavPills';

const TagCategory = () => {
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}`)
            setGenres(response.data.genres)
            console.log(genres);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getGenres()
    }, [])
    return (
        <div className="mt-4">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" href="#">All</a>
                </li>
                {
                    genres.map((genre, index) => {
                        return (
                            <NavPills 
                            key={ index }
                            genreId={ genre.id }
                            genreName={ genre.name }
                        />
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TagCategory;
