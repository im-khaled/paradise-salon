import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { authProvider } from '../../Context/AuthContext';

const Navbar = () => {
    const {user, logOut} = useContext(authProvider);
    const handleLogOut = () => {
        logOut();
    }

    return (
        <div>
            <div className='flex justify-center mb-10 mt-8'>
                <img src="/Media/Paradise-salon-logo.png" alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex space-x-8 uppercase font-semibold'>
                    <li><NavLink className='tracking-wide duration-200 hover:bg-amber-500 hover:p-1 hover:px-4 hover:rounded-full text-gray-900 hover:text-white' to='/'>Home</NavLink></li>
                    <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/blog'>Blog</NavLink></li>
                    <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white'to='/team'>Team</NavLink></li>
                    <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white'to='/contact'>Contact</NavLink></li>
                    <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/services'>Services</NavLink></li>
                    
                    {
                        user?.uid?<>
                            <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/addService'>Add Service</NavLink></li>
                            <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/review'>Review</NavLink></li>
                            <li onClick={handleLogOut}><Link className='tracking-wider bg-amber-500 rounded-full p-1 px-4 text-white hover:bg-amber-400'to='/login'>Logout</Link></li>
                        </>:
                        <>
                            <li><Link className='tracking-wider bg-amber-500 rounded-full p-1 px-4 text-white hover:bg-amber-400'to='/login'>Login</Link></li>
                            <li><Link className='tracking-wider bg-amber-500 rounded-full p-1 px-4 text-white hover:bg-amber-400' to='/register'>Sign UP</Link></li>
                        </>
                    }
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;