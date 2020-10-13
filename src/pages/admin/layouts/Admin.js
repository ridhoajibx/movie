import React from 'react';
import Sidenav from '../component/Sidenav';
import Topnav from '../component/Topnav';
import Dashboard from '../views/Dashboard';

const Admin = ({ children }) => {
    return (
        <div>
            <div className="container-fluid">
                <Topnav />
            </div>
            <div className="container">
                <div className="py-5 mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <Sidenav />
                        </div>
                        <div className="col-md-8">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
