import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            This file Not Found
            <Link to="/">Back Home</Link>
        </div>
    );
}

export default NotFound;
