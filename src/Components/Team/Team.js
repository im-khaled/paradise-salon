import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import useTitle from '../Hooks/useTitle';

const Team = () => {
    useTitle('Team')
    return (
        <div>
            <div className='my-10 bg-amber-500 text-white text-center h-24'>
                    <div className='h-full flex justify-center items-center text-4xl p-5 font-semibold'>
                        <p>Our Team</p>
                    </div>
            </div>
           <div className='py-16'>
           <div className='mt-10 text-center text-gray-600'>
                <h2 className='mb-5 uppercase font-semibold text-xl' >Discover Our Team</h2>
                <p>Meet Our Excellent Team & Our Working Environment</p>
            </div>
            <div className='container-layout py-16'>
                    <div className='grid grid-cols-4 gap-5'> 
                        <div className='text-center'>
                            <img className='rounded shadow-md mb-5' src="/Media/Images/Corina.jpg" alt="" />
                            <h2 className='text-xl font-semibold'>Corina Ruppel</h2>
                            <p className='text-gray-600 text-sm'>Team Head & Specialist</p>
                            <div> <FaFacebook className='inline-block mr-4'></FaFacebook> <FaTwitter className='inline-block'></FaTwitter></div>
                        </div>
                        <div className='text-center'>
                             <img className='rounded mb-5 shadow-md' src="/Media/Images/Jovan.jpg" alt="" />
                             <h2 className='text-xl font-semibold'>Jovan Jonson</h2>
                            <p className='text-gray-600 text-sm'>Stylish Cut</p>
                            <div> <FaFacebook className='inline-block mr-4'></FaFacebook> <FaTwitter className='inline-block'></FaTwitter></div>
                        </div>
                        <div className='text-center'>
                             <img className='rounded mb-5 shadow-md' src="/Media/Images/Tim.jpg" alt="" />
                             <h2 className='text-xl font-semibold'>Tim Browns</h2>
                            <p className='text-gray-600 text-sm'>Regular Hair Cut</p>
                            <div> <FaFacebook className='inline-block mr-4'></FaFacebook> <FaTwitter className='inline-block'></FaTwitter></div>
                        </div>
                        <div className='text-center'>
                             <img className='rounded mb-5 shadow-md' src="/Media/Images/Kovan.jpg" alt="" />
                             <h2 className='text-xl font-semibold'>Kovan Karl</h2>
                            <p className='text-gray-600 text-sm'>Permanent Waving</p>
                            <div> <FaFacebook className='inline-block mr-4'></FaFacebook> <FaTwitter className='inline-block'></FaTwitter></div>
                        </div>
                    </div>
            </div>
           </div>
        </div>
    );
};

export default Team;