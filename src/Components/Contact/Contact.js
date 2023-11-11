import React from 'react';
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import useTitle from '../Hooks/useTitle';
const Contact = () => {
    useTitle('Contact')
    return (
        <div>
                <div className='my-10 bg-amber-500 text-white text-center h-24'>
                    <div className='h-full flex justify-center items-center text-4xl p-5 font-semibold'>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='container-layout py-16'>
                    <div className='grid grid-cols-2 gap-8 p-5'>
                        <div className='w-full'>
                            <img src="Media/Images/Corina.jpg" className='rounded shadow-md' alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold pb-5'>Mrs Corina Ruppel Specialist</h1>
                            <p className='text-gray-600'>
                            Hello there! I'm Corina, your friendly neighborhood barber with a passion for creating fresh and timeless looks that leave you feeling confident and looking your best. As a skilled female barber, I'm well-versed in a wide range of cutting techniques, from classic scissor cuts to precision clipper work. I also specialize in beard trims and shaves, ensuring every client leaves my chair with a sharp and well-groomed appearance.
                            </p>
                            <div className='mt-10 flex justify-start'>
                                <div className='border-2 border-l-4 ps-5 pe-12  py-2 rounded '>
                                    <h4 className='font-bold'>My Contact Info:</h4>
                                    <p className='text-gray-600'><FaPhoneAlt className='inline-block'></FaPhoneAlt> +491789345645</p>
                                </div>
                                <div className='border-2 border-l-4 ps-5 pe-10  py-2 rounded ms-10'>
                                    <h4 className='font-bold'>My Contact Email:</h4>
                                    <p className='text-gray-600'><FaMailBulk className='inline-block'></FaMailBulk> corina@ruppel.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Contact;