import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react';


const Card = (props) => {
    const [ratings, setRatings] = useState(0);
    let values = {
        size: 20,
        value: ratings / 2,
        isHalf: true,
        edit: false
    };
    const getRating = () => {
        let total = 0
        if (props.reviews) {
            props.reviews.forEach((item)=> {
                total+=item.rating / props.reviews.length
                setRatings(total)
            })
        } else {
            setRatings(0)
        }
    }
    useEffect(()=>{
        getRating()
    }, [])

    // console.log(props.reviews);
    return (
        <div className="cardMovie">
            <Link to={`/movie/${props.movieId}`} >
                <div className="img1" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
                <div className="title">{props.title}</div>
                <div className="text"> {props.text} </div>
                {/* <div className="views">{props.lang}</div> */}
                <div className="catagory">{props.date}</div>
                <div className="rating d-flex align-items-center">
                <span className="mr-2"> <ReactStars {...values} /> </span>
                </div>
            </Link>
        </div>
    );
}

export default Card;
