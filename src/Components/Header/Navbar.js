import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { authProvider } from '../../Context/AuthContext';

const Navbar = () => {
    const {user, logOut} = useContext(authProvider);
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse);
    }
    const handleLogOut = () => {
        logOut();
    }

    return (
        <div className='relative'>
            <div className='max-lg:hidden'>
                <div className='flex justify-center mb-10 mt-8'>
                    <Link to='/'><img src="/Media/Paradise-salon-logo.png" alt="" /></Link>
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
                                <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/reviews'>Review</NavLink></li>
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
            <div className={collapse? 'absolute z-50 w-4/6 mx-16 top-16 justify-between border p-10 bg-white border-gray-300 flex animator lg:hidden': 'hidden'}>
            <>
                
                    <ul className='space-y-2 uppercase font-semibold'>
                        <li><NavLink className='tracking-wide duration-200 hover:bg-amber-500 hover:p-1 hover:px-4 hover:rounded-full text-gray-900 hover:text-white' to='/'>Home</NavLink></li>
                        <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/blog'>Blog</NavLink></li>
                        <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white'to='/team'>Team</NavLink></li>
                        <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white'to='/contact'>Contact</NavLink></li>
                        <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/services'>Services</NavLink></li>

                        {
                            user?.uid?<>
                                <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/addService'>Add Service</NavLink></li>
                                <li><NavLink className='tracking-wider text-gray-900  duration-200 hover:bg-amber-500 hover:rounded-full hover:p-1 hover:px-4 hover:text-white' to='/reviews'>Review</NavLink></li>
                                <li onClick={handleLogOut}><Link className='tracking-wider bg-amber-500 rounded-full p-1 px-4 text-white hover:bg-amber-400'to='/login'>Logout</Link></li>
                            </>:
                            <>
                                <li><Link className='tracking-wider bg-amber-500 rounded-full p-1 px-4 text-white hover:bg-amber-400'to='/login'>Login</Link></li>
                                <li><Link className='tracking-wider bg-amber-500 rounded-full p-1 px-4 text-white hover:bg-amber-400' to='/register'>Sign UP</Link></li>
                            </>
                        }
                    </ul>   
                     <div className='flex justify-around'>
                            <div className='flex justify-start hidden sm:block  '>
                                <Link to='/'><img src="/Media/Paradise-salon-logo.png" alt="" /></Link>
                            </div>
                    
                            <div onClick={handleCollapse} className="hidden max-lg:block h-10">
                                {collapse?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> :'' 
                
                                }
                            </div>
                            
                     </div>
            </>
            </div>
            <div className='flex justify-end'>
                <div onClick={handleCollapse} className="hidden max-lg:block mr-10 mb-1">
                        {collapse?
                        '':   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"         className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> 
            
                        }

                </div>
            </div>
        </div>
    );
};

export default Navbar;