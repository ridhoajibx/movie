import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    return (
            <div className="cardMovie">
                <Link to="">
                    <div className="img1" style={{ backgroundImage: `url(${props.content.imageUrl})` }}></div>
                    <div className="title">{props.content.title}</div>
                    <div className="text"> { props.content.text } </div>
                    <Link to="/"><div className="catagory">{ props.content.category } <i className="fas fa-film"></i></div></Link>
                    <Link to="/"><div className="views">{ props.content.date }  <i className="far fa-eye"></i> </div></Link>
                </Link>
            </div>
    );
}

export default Card;
