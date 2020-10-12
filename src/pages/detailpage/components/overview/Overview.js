import React from 'react';

const Overview = () => {
    return (
        <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <div className="synopsis">
                <h4 className="font-weight-bold">Synopsis</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugit quas qui tempore pariatur praesentium dolores voluptatum aut blanditiis est, consequatur enim. Minima, officia dolor! Veritatis, numquam consequuntur. Id accusantium voluptate modi repellendus unde voluptates ipsam nisi obcaecati libero, et, voluptatum saepe laudantium distinctio dolor aliquam odit atque vitae consectetur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat sint illum obcaecati consequuntur corporis corrupti in voluptate, nisi atque laboriosam natus culpa magni sunt nihil iure! Qui, quidem nobis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugit quas qui tempore pariatur praesentium dolores voluptatum aut blanditiis est, consequatur enim. Minima, officia dolor! Veritatis, numquam consequuntur. Id accusantium voluptate modi repellendus unde voluptates ipsam nisi obcaecati libero, et, voluptatum saepe laudantium distinctio dolor aliquam odit atque vitae consectetur?
                </p>
            </div>
            <div className="info">
                <h4 className="font-weight-bold">Movie information</h4>
                <div>
                    <span className="font-weight-bold">Release date</span> : 10 January 20, 2019
                </div>
                <div>
                    <span className="font-weight-bold">Director</span> : James bradly
                </div>
                <div>
                    <span className="font-weight-bold">Label</span> : Studios Marvel
                </div>
            </div>
        </div>
    );
}

export default Overview;
