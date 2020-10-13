import React from 'react';
import Character from './character/Character';
import Overview from './overview/Overview';
import Review from './review/Review';

const Navpills = ({ movie, characters, reviews, pages, totalPages, prevPage, nextPage }) => {
    return (
        <section className="mb-2">
            <div className="container">
                <div className="row">
                    <div className="my-4">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <div className='nav-link tag-category font-weight-bold mb-1 active' id="overview-tab" data-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1" id="review-tab" data-toggle="pill" href="#review" role="tab" aria-controls="review" aria-selected="true">Review</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1" id="pilcharacterls-home-tab" data-toggle="pill" href="#character" role="tab" aria-controls="character" aria-selected="true">Character</div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content mb-4" id="pills-tabContent">
                        <Overview
                            movie={movie}
                        />
                        <Character
                            characters={characters}
                        />
                        <Review
                            movie={movie}
                            reviews={reviews}
                            pages={pages}
                            totalPages={totalPages}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navpills;
