import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user, userSignOut} = useContext(AuthContext);
    const handleSignOut= () =>{
        userSignOut()
        .then(() =>{})
        .catch(error=> console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl">WebPro</Link>
            {user?.email && <span>Welcome, {user.email}</span>}
            {user?.email ? <button onClick={handleSignOut} className="ml-3 btn btn-outline btn-accent rounded-md">Log out</button>
            :
            <button><Link to='/login' className="ml-3 btn btn-outline btn-accent rounded-md">Login</Link></button>
            }
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </ul>
        </div>
    </div>
</div>
    );
};

export default Header;