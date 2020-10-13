import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css'
import Hero from './components/Hero';
import Footer from '../../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    profileimage: yup.mixed(),
    fullname: yup.string(),
    username: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
});

const Edit = (props) => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {
        
        try {
            let { fullname, username, profileimage, email, password } = data;
            const formData = new formData();
            formData.append("profileimage", profileimage)
            formData.append("fullname", fullname)
            formData.append("username", username)
            formData.append("email", email)
            formData.append("password", password)
            let url = `${process.env.REACT_APP_URL}/user/update`
            let res = await axios(url,
                {
                    method: "PUT",
                    headers:{
                        "access_token" : token
                    },
                    body: formData
                }
            )
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Yeay",
                    text: "data has been updated!"
                })
                window.history.back('/user')
            } else {
                throw res
            }
            // console.log(res);
        } catch (e) {
            Swal.fire({
                icon: "error",
                title: "Upps",
                text: `Something wrong`
            })
            console.log(e);
        }
    }

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState({
        id: "",
        fullname: "",
        username: "",
        profileimage: "",
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
                    profileimage: res.data.profileimage,
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="d-flex justify-content-center">
                                        <div className="mb-3">
                                            <label htmlFor="upload-button">
                                                {user.profileimage ? (
                                                    <img src={user.profileimage} alt="file" className="rounded-circle img-upload" />
                                                ) : (
                                                        <>
                                                            <div className="text-center btn-main">Upload your photo</div>
                                                        </>
                                                    )}
                                            </label>
                                            <input
                                                type="file"
                                                id="upload-button"
                                                name="profileimage"
                                                style={{ display: "none" }}
                                                ref={register}
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
                                                defaultValue={user.fullname}
                                                ref={register}
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
                                                name="username"
                                                defaultValue={user.username}
                                                ref={register}
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
                                                defaultValue={user.email}
                                                ref={register}
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
                                                defaultValue={user.password}
                                                ref={register}
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
