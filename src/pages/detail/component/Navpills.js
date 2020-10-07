import React from 'react';

const Navpills = () => {
    return (
        <section className="mb-2">
            <div className="container">
                <div className="row">
                    <div className="mt-4">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <div className='nav-link tag-category font-weight-bold mb-1' >Overview</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1" >Character</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1" >Review</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navpills;
