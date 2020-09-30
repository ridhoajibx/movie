import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assets/logo.png'

import apple from '../../assets/aplstore.png';
import gplay from '../../assets/gplay.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/ig.png';
import pinterest from '../../assets/pinterest.png';

const Footer = () => {
    return (
        <footer className="bgMainColor footer">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Link className="footerBrand d-flex align-items-center" to="/">
                            <img src={Logo} alt="" className="brandImage" />
                            <div className="brandText">
                                ALL-STAR MOVIE
                            </div>
                        </Link>
                        <div className="footerText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque consequuntur vero id dolor. Magnam ducimus fuga cumque
                            asperiores sed quaerat ipsum, minima suscipit molestiae sunt
                            quibusdam unde vel porro modi libero aliquid mollitia laboriosam
                            iusto laborum et veniam. Officiis, maiores fuga earum aperiam
                            odio delectus aut libero eligendi doloremque quos.
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                        <ul className="footerList">
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Layanan</a></li>
                            <li><a href="#">Karir</a></li>
                            <li><a href="#">Pusat Media</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-12">
                        <div className="footerTitle">Download</div>
                        <div className="footerImg">
                            <Link to="#">
                                <img className="appleImg" src={apple} alt="" />
                            </Link>
                            <Link to="#">
                                <img className="googleImg" src={gplay} alt="" />
                            </Link>
                        </div>

                        <div className="footerTitle">Social Media</div>
                        <div className="footerImg">
                            <Link to="#">
                                <img className="imageSocial" src={facebook} alt="" />
                            </Link>
                            <Link to="#">
                                <img className="imageSocial pinterest" src={pinterest} alt="" />
                            </Link>
                            <Link to="#">
                                <img className="imageSocial" src={instagram} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="text-light py-4">
                        Copyright &copy; 2000 - 2020 All-Star Movie. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
