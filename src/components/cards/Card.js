import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react';


const Card = (props) => {
    let total = 0;
    let rating = props.reviews.length !== 0 ? props.reviews.map((item)=>{return total+=item.rating}) : null
    // let reviews = props.reviews

    const ratings = {
        size: 20,
        value: rating / 2,
        isHalf: true,
        edit: false
    }
    console.log(rating, "rating value");
    return (
        <div className="cardMovie">
            <div onClick={() => console.log(rating)}>
                <div className="img1" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
                <div className="title">{props.title}</div>
                <div className="text"> {props.text} </div>
                <div className="catagory">{props.director} </div>
                <div className="views">{props.date.slice(-4)} </div>
                <div className="rating d-flex align-items-center">
                    <span className="mr-2"><ReactStars {...ratings} /></span>
                </div>
            </div>
        </div>
    );
}

export default Card;
