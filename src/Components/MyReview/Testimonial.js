import React from 'react';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = ({reviews}) => {
    
    return (
        <div>
            <div className="container px-4 mx-auto">
                <h1 className="mt-4 mb-6 text-5xl md:text-10xl xl:text-11xl font-heading font-medium leading-tight text-[#33691d]">Testimonials</h1>

                {
                    reviews.map(review => <SingleTestimonial key={review._id} review={review} />)
                }

             </div>
        </div>
    );
};

export default Testimonial;