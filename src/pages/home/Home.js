import React from 'react';
import Card from '../../components/cards/Card';
import Carousel from '../../components/carousel/Carousel';
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
                    <div className="row">
                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
                        }} />

                        <Card content={{
                            imageUrl: "http://cima4u.tv/wp-content/uploads/1-71.jpg",
                            title: "Vikings",
                            category: "Action",
                            text: "Now You can watch the first epsoide of the action series Vikings , wish you interesting watch",
                            date: "2020"
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
