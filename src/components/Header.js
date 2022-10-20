import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl">WebPro</Link>
            {user?.displayName && <span>Welcome to {user.displayName}</span>}
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