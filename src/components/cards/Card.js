import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import ReactStars from "react-rating-stars-component";


const Card = (props) => {
    const rating = {
        size : 20,
        value : `${props.rating}` / 2,
        edit: false
    }
    return (
            <div className="cardMovie">
                <Link to="">
                    <div className="img1" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
                    <div className="title">{props.title}</div>
                    <div className="text"> { props.text } </div>
                    <Link to="/"><div className="catagory">{props.lang} <i className="fas fa-film"></i></div></Link>
                    <Link to="/"><div className="views">{props.date}  <i className="far fa-eye"></i> </div></Link>
                    <div className="rating d-flex align-items-center">
                        <span className="mr-2">{ props.rating }</span> <ReactStars {...rating}/>
                    </div>
                </Link>
            </div>
    );
}

export default Card;