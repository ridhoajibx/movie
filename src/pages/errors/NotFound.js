import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="display-6">
                    <p>404</p>

                    <p>This pages not found !</p>
                    <Link className="btn btn-main" to='/' >Go back to Home</Link>
                </div>
            </div>               
        </div>
    );
}

export default NotFound;
