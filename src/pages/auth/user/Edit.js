import React, { useState } from 'react';
import './User.css'
import Hero from './components/Hero';
import Footer from '../../../components/footer/Footer';
import { Link } from 'react-router-dom';

const Edit = () => {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };

    return (
        <>
            <Hero />
            <div className="container-fluid mb-5">
                <div className="row justify-content-center mt--5">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-white border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className="mb-0">Settings</h3>
                                    <Link to="/user" className="btn btn-main">Back</Link>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-center">
                                    <div className="mb-3">
                                        <label htmlFor="upload-button">
                                            {image.preview ? (
                                                <img src={image.preview} alt="dummy" className="rounded-circle img-upload" />
                                            ) : (
                                                    <>
                                                        <div className="text-center btn-main">Upload your photo</div>
                                                    </>
                                                )}
                                        </label>
                                        <input
                                            type="file"
                                            id="upload-button"
                                            style={{ display: "none" }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="name" className="col-form-label col-sm-3">Fullname</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="name" defaultValue="Jumakri Ridho Fauzi" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="username" className="col-form-label col-sm-3">Username</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="username" defaultValue="ridhoajibx" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="gender" className="col-form-label col-sm-3">Gender</label>
                                    <div className="col-sm-9">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" checked type="radio" name="gender" id="male" value="male" />
                                            <label class="form-check-label label mt-2" for="male">Male</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="female" value="female" />
                                            <label class="form-check-label label mt-2" for="female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="email" className="col-form-label col-sm-3">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="email" defaultValue="name@example.com" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="password" className="col-form-label col-sm-3">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" id="password" defaultValue="password" />
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-main float-right">Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Edit;
