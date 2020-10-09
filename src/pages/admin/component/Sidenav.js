import React from 'react';

const Sidenav = () => {
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                Dashboard
            </a>
            <a href="#" className="list-group-item list-group-item-action">User</a>
            <a href="#" className="list-group-item list-group-item-action">Movie</a>
            <a href="#" className="list-group-item list-group-item-action">Sign out</a>
        </div>
    );
}

export default Sidenav;
