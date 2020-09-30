import React from 'react';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Footer from '../../components/footer/Footer';
import NavPills from '../../components/NavPills';
import Pagination from '../../components/Pagination';

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
                    <div className="row">
                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />

                        <Card content={{
                            imageUrl: "http://placekitten.com/g/300/200",
                            title: "John Wick",
                            category: "Action",
                        }} />
                    </div>
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
