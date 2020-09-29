import React from 'react';
import { Link } from 'react-router-dom';

import apple from '../assets/aplstore.png';
import gplay from '../assets/gplay.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/ig.png';
import pinterest from '../assets/pinterest.png';

const Footer = () => {
    return (
        <footer className="bg-main-color py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Link className="footer-brand" to="/">All-Star Movie</Link>
                        <div className="my-2 footer-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque consequuntur vero id dolor. Magnam ducimus fuga cumque
                            asperiores sed quaerat ipsum, minima suscipit molestiae sunt
                            quibusdam unde vel porro modi libero aliquid mollitia laboriosam
                            iusto laborum et veniam. Officiis, maiores fuga earum aperiam
                            odio delectus aut libero eligendi doloremque quos.
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <ul className="ml-0 ml-md-4 footer-list">
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Layanan</a></li>
                            <li><a href="#">Karir</a></li>
                            <li><a href="#">Pusat Media</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className="footer">
                            <div className="footer-title">Download</div>
                            <div className="footer-img">
                                <Link to="#">
                                    <img className="image-dw" src={apple} alt="" />
                                </Link>
                                <Link to="#">
                                    <img className="image-dw-1" src={gplay} alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="footer">
                            <div className="footer-title">Social Media</div>
                            <div className="footer-img">
                                <Link to="#">
                                    <img className="image-social" src={ facebook } alt="" />
                                </Link>
                                <Link to="#">
                                    <img className="image-social" src={ instagram } alt="" />
                                </Link>
                                <Link to="#">
                                    <img className="image-social p-1" src={ pinterest } alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
