import React, { useContext } from 'react';
import "./Home.css";
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import { authProvider } from '../../Context/AuthContext';
import Service from '../Services/Service';
import useTitle from '../Hooks/useTitle';
import { Link } from 'react-router-dom';


const Home = () => {
    useTitle('Home');
    const {services} = useContext(authProvider);
    
    return (
        <div>
            <div className='slider w-full relative my-5'>
                <div id='slide1' className='slider-item w-full'>
                    <img src="Media/Slides/slide-1.jpg" className='img-size' alt="" />
                    <div className='flex justify-between absolute left-5 right-5 top-1/2 z-30 text-white '>
                        <a href="#slide3" className='bg-amber-500 p-3 rounded-full hover:bg-amber-400'><FaLessThan></FaLessThan></a>
                        <a href="#slide2" className='bg-amber-500 p-3 rounded-full hover:bg-amber-400'><FaGreaterThan></FaGreaterThan></a>
                    </div>
                </div>
                <div id='slide2' className='slider-item relative w-full'>
                    <img src="Media/Slides/slide-2.jpg" className='img-size' alt="" />
                    <div className='flex justify-between absolute left-5 right-5 top-1/2 z-30 text-white '>
                        <a href="#slide1" className='bg-amber-500 p-3 rounded-full hover:bg-amber-400'><FaLessThan></FaLessThan></a>
                        <a href="#slide3" className='bg-amber-500 p-3 rounded-full hover:bg-amber-400'><FaGreaterThan></FaGreaterThan></a>
                    </div>
                </div>
                <div id='slide3' className='slider-item relative w-full'>
                    <img src="Media/Slides/slide-3.jpg" className='img-size' alt="" />
                    <div className='flex justify-between absolute left-5 right-5 top-1/2 z-30 text-white '>
                        <a href="#slide2" className='bg-amber-500 p-3 rounded-full hover:bg-amber-400'><FaLessThan></FaLessThan></a>
                        <a href="#slide1" className='bg-amber-500 p-3 rounded-full hover:bg-amber-400'><FaGreaterThan></FaGreaterThan></a>
                    </div>
                </div>
            </div>
            <div className='mt-20 mb-10 flex justify-center'>
                <h2 className='text-2xl font-semibold'>All Time Popular Services</h2>
            </div>
            <div className='container-layout grid grid-cols-3 gap-5'>
                  {services.slice(0, 3).map(service => <Service key={service.service_id
                    } popularServices={service}></Service>)}
            </div>
            <div className='mt-20 w-52 mx-auto'>
                <Link to='/services'><button className='btn bg-amber-500 w-full text-white py-2 text-xl hover:bg-amber-400 rounded-full'>See All Services</button></Link>
            </div>
        </div>
    );
};

export default Home;