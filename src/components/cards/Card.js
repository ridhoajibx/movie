import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import ReactStars from "react-rating-stars-component";


const Card = (props) => {
    const rating = {
        size : 20,
        value : props.rating / 2,
        isHalf : true,
        edit: false
    }
    return (
            <div className="cardMovie">
            <div onClick={()=>{console.log(props.movieId)}} >
                <div className="img1" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
                <div className="title">{props.title}</div>
                <div className="text"> { props.text } </div>
                <div className="catagory">{props.lang} <i className="fas fa-film"></i></div>
                <div className="views">{props.date}  <i className="far fa-eye"></i> </div>
                <div className="rating d-flex align-items-center">
                    <span className="mr-2">{ props.rating }</span> <ReactStars {...rating}/>
                </div>
            </div>
        </div>
    );
}

export default Card;
