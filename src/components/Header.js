import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-main-color fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">All-Star Movie</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <form className="mt-2 mt-md-0 mx-auto">
                                <input className="form-control search-input mr-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                { children }
            </main>
        </div>
    );
}

export default Header;
