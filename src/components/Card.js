import React from 'react';

const Card = (props) => {
    return (
        <div className="col-md-2 col-6">
            <div className="card card-small mb-3">
                <img src={ props.content.imageUrl } className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text m-0">{ props.content.title }</p>
                    <p className="card-text"><small className="text-muted">{ props.content.title }</small></p>
                </div>
            </div>
        </div>
    );
}

export default Card;
