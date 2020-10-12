import React from 'react';
import axios from 'axios';

import './User.css'
import ProfileImg from '../../../assets/profile.jpeg'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Hero from './components/Hero';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const Index = (props) => {
    let token = localStorage.getItem("token")
    let userData = useHistory()
    const [user, setUser] = useState({
        id: "",
        fullname: "",
        username: "",
        image: "",
        gender: "",
        age: "",
        email: "",
        password: ""
    })

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
                    image: res.data.profileimage,
                    gender: res.data.gender,
                    age: res.data.age,
                    email: res.data.email,
                    password: res.data.password
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

    const clickEdit = () => {
        userData.push({
            pathname: '/user/edit',
            state: user,
        })
        
	}
    console.log(user);
    return (
        <>
            <Hero username={user.username} />
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-5 md-mb-0 mx-auto mt--5">
                            <div className="card card-profile shadow">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3">
                                        <div className="card-profile-image">
                                            <div>
                                                <img src={!user.image ? null : user.image} className="rounded-circle" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-4 mt-5">
                                    <div className="row mt-4 pt-5 pb-3">
                                        <div className="col">
                                            <div className="d-flex justify-content-center">
                                                <button onClick={clickEdit} className="btn btn-sm btn-main">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-weight-bold">
                                            {user.fullname}<span className="font-weight-light">, {user.age}</span>
                                        </div>
                                        <div className="font-weight-bold">
                                            <span className="font-weight-light">{`@${user.username}`}</span>
                                        </div>
                                        <div>
                                            <small>{!user.gender ? 'gender none' : user.gender}</small>
                                        </div>
                                        <div className="font-weight-bold">
                                            {user.email}
                                        </div>
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

export default Index;
