import React from 'react';

const NavPills = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">{ props.genreName }</a>
        </li>
    );
}

export default NavPills;
