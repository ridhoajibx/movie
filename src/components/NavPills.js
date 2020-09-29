import React from 'react';

const NavPills = () => {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">All</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Anime</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Action</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Adventure</a>
                </li>
            </ul>
        </div>
    );
}

export default NavPills;
