import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>This is Home page for {user?.displayName}</h1>
        </div>
    );
};

export default Home;