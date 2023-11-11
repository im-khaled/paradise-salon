import React, { useContext } from 'react';
import { authProvider } from '../../Context/AuthContext';
import Service from './Service';
import useTitle from '../Hooks/useTitle';


const AllService = () => {
    useTitle('Service')
    const {services} = useContext(authProvider);
    return (
        <div>
            <div className='my-10 bg-amber-500 text-white text-center h-24'>
                    <div className='h-full flex justify-center items-center text-4xl p-5 font-semibold'>
                        <p>Serices</p>
                    </div>
            </div>
            <div className='container-layout py-16'>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <h2 className='uppercase text-amber-400 font-semibold'>Welcome to Paradise Salon</h2>
                        <h1 className='text-4xl font-bold my-5'>List Of Our Services</h1>
                        <p className='text-gray-600 pb-10'>Our Salon services encompass a wide range of beauty and grooming treatments and experiences offered by professionals in a salon or spa setting. These services are designed to enhance an individual's appearance, boost their confidence, and provide relaxation and self-care.</p>
                        <button className='uppercase px-4 py-2 bg-gray-900 rounded-full text-white hover:bg-gray-700'>Select Service</button>
                    </div>
                    <div>
                        <img className='rounded shadow-md' src="/Media/Slides/slide-2.jpg" alt="" />
                    </div>
                </div>
                <div>
                <div className=' grid grid-cols-3 gap-5 mt-16 pt-5'>
                  {services.map(service => <Service key={service.service_id
                    } popularServices={service}></Service>)}
                </div>
                </div>

            </div>
        </div>
    );
};

export default AllService;