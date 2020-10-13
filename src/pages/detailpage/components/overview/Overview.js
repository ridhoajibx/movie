import React from 'react';

const Overview = ({movie}) => {
    // console.log(movie);
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <div className="synopsis">
                <h4 className="font-weight-bold">Synopsis</h4>
                <p>
                    {movie.synopsis}
                </p>
            </div>
            <div className="info">
                <h4 className="font-weight-bold">Movie information</h4>
                <div>
                    <span className="font-weight-bold">Release date</span> : {movie.year}
                </div>
                <div>
                    <span className="font-weight-bold">Director</span> : {movie.director}
                </div>
                <div>
                    <span className="font-weight-bold">Budget</span> : {movie.budget}
                </div>
            </div>
        </div>
    );
}

export default Overview;
