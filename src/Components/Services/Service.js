import React from 'react';

const Service = ({popularServices}) => {
    
    return (
        <div className='p-4 border border-amber-300 rounded shadow-sm'>
            <div className='pb-4  '>
                <img className='rounded' src={popularServices.image} alt="" />
            </div>
            <h1 className='text-2xl font-bold'>{popularServices.Name}</h1>
            <p className='my-2'>{popularServices.description.slice(0, 100)}</p>
            <div className='mb-10 font-bold flex justify-between' >
                <p >Rating: {popularServices.rating} </p>
                <p className='pe-4'>Price: $ {popularServices.price}</p>
            </div>

            <button className='btn bg-amber-500 w-full text-white py-2 text-xl hover:bg-amber-400'>View Details</button>
        </div>
    );
};

export default Service;