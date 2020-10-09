import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = (props) => {
    
    return (
        <section className="mb-2">
            <div className="container">
                <div className="row">
                    <div className="mt-4">
                        <h4 className="title font-weight-bold text-muted">Browse by category</h4>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1 active" >All</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1" >Action</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1" >Anime</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link tag-category font-weight-bold mb-1" >Horror</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;