import React from 'react';

const Header = ({children}) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">All-Star Movie</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <form className="mt-2 mt-md-0 mx-auto">
                                <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home</a>
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
