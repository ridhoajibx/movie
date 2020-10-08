import React from 'react';

const Sidenav = () => {
    return (
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                Dashboard
            </a>
            <a href="#" class="list-group-item list-group-item-action">User</a>
            <a href="#" class="list-group-item list-group-item-action">Movie</a>
            <a href="#" class="list-group-item list-group-item-action">Sign out</a>
        </div>
    );
}

export default Sidenav;
