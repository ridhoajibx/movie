import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'
import Hero from './components/Hero';
import Footer from '../../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Edit = (props) => {
    // console.log(props);
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState({
        id: "",
        fullname: "",
        username: "",
        image: {},
        gender: "",
        age: "",
        email: "",
        password: ""
    });

    const getUser = async () => {
        try {
            let url = `${process.env.REACT_APP_URL}/user/find/`
            let res = await axios.get(url,
                {
                    headers: {
                        "access_token": token
                    }
                }
            )
            if (res.status === 201) {
                setUser({
                    id: res.data.id,
                    fullname: res.data.fullname,
                    username: res.data.username,
                    gender: res.data.gender,
                    age: res.data.age,
                    email: res.data.email,
                    password: res.data.password,
                    image: res.data.profileimage,
                })
            } else {
                throw res
            }
        } catch (e) {
            Swal.fire({
                title: "oppps",
                icon: "error",
                text: `${e.response.data.msg}`
            })
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleChangeImg = e => {
        if (e.target.files.length) {
            setUser({
                image: {
                    preview: URL.createObjectURL(e.target.files[0]),
                    file: e.target.files[0]
                }
            });
        }
    };

    const handleChangeVal = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        setUser({
          [name]: value,
        });
      };

    const handleSubmit = async () => {
        const formData = new FormData();
        // formData.append("user", image.raw);

        try {
            let res = await axios(`${process.env.REACT_APP_URL}/user/update`, {
                method: "put",
                headers: {
                    "access_token": token
                }
            });
            if (res.status === 200) {
                // setImage(formData)
                setUser({
                    fullname: res.data.fullname,
                    username: res.data.username,
                    email: res.data.email,
                    password: res.data.password,
                })
            } else {
                throw res
            }
        } catch (e) {
            console.log(e.response.data.msg);
        }
    };

    // useEffect(() => {
    //     handleSubmit()
    // }, []);

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
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex justify-content-center">
                                        <div className="mb-3">
                                            <label htmlFor="upload-button">
                                                {user.image.preview ? (
                                                    <img src={user.image.preview} alt="dummy" className="rounded-circle img-upload" />
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
                                                onChange={handleChangeImg}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="fullname" className="col-form-label col-sm-3">Fullname</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fullname"
                                                name="fullname"
                                                value={user.fullname}
                                                onChange={handleChangeVal}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="username" className="col-form-label col-sm-3">Username</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                value={user.username}
                                                onChange={handleChangeVal}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="email" className="col-form-label col-sm-3">Email</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={user.email}
                                                onChange={handleChangeVal}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password" className="col-form-label col-sm-3">Password</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                value={user.password}
                                                onChange={handleChangeVal}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-main float-right">Change</button>
                                    </div>
                                </form>
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
