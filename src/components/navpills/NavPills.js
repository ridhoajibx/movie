import React from 'react';

const NavPills = () => {
    return (
        <div className="mt-4">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#">All</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Anime</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Action</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Adventure</a>
                </li>
            </ul>
        </div>
    );
}

export default NavPills;
