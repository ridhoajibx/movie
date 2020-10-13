import React, { useState } from 'react';

const Dashboard = () => {
    const [username, setUsername] = useState('Ridho')
    return (
        <div>
            Hi, { username }
        </div>
    );
}

export default Dashboard;
