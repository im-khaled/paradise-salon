import React from 'react';

const SingleTestimonial = ({review}) => {
    const{photoUrl, name, rating, addedReview, date} = review; 
    
    return (
        <div className="mb-2 shadow-md border rounded overflow-hidden">
            <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="flex flex-col items-center">
                    <img className=" w-24 rounded-full shadow-md mt-6 mb-4" src={photoUrl} alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <h4 className="w-full md:w-auto text-xl font-heading font-medium">{name}</h4>
                        <div className='flex justify-center rounded items-center mt-6 bg-amber-300 px-6 max-md:block max-md:py-2'>
                            <p>Your Rating</p>
                            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-900"></div>
                            <span className="mr-4 text-xl font-heading font-medium">{rating} Out of 5.0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3 mb-6 md:mb-0">
                        <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">{addedReview}</p>
                    </div>
                    <div className="w-full md:w-1/3 text-right">
                        <p className="mb-8 text-sm text-gray-300">Added On: {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;