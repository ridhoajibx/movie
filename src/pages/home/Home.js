import React from 'react';

import Carousel from '../../components/carousel/Carousel';
import MovieIndex from '../movies/Index';
import Footer from '../../components/footer/Footer';
import NavPills from '../../components/navpills/NavPills';
import Pagination from '../../components/pagination/Pagination';

const Home = () => {
    
    return (
        <div>
            <Carousel />
            <section className="mb-2">
                <div className="container">
                    <div className="row">
                        <h4 className="title font-weight-bold text-muted">Browse by category</h4>
                        <NavPills />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <MovieIndex />
                    
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
