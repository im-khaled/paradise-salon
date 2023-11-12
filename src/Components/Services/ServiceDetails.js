import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';

const ServiceDetails = () => {
    const{user} = useContext(authProvider)
    const sigleSevice = useLoaderData();
    const {Name, description, rating, price, image, _id} = sigleSevice;

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const photoUrl = e.target.photo.value;
        const addedReview = e.target.review.value;
        const date = e.target.date.value;

        const newReview = {
            email: user.email,
            userName: user.displayName,
            serviceId: _id,
            serviceName:sigleSevice.Name,
            servicePrice: price,
            name,
            rating,
            photoUrl,
            addedReview,
            date
        }

        fetch('http://localhost:8080/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('myToken', data.token);
                console.log(data)
                if (data.result.acknowledged) {

                    alert('Your Review Submitted Successfully');


                }

            })
        e.target.reset();
    }
    console.log(sigleSevice);
    return (
        <div>
               <div className='my-10 bg-amber-500 text-white text-center h-24'>
                    <div className='h-full flex justify-center items-center text-4xl p-5 font-semibold'>
                        <p>Our Service Details</p>
                    </div>
                </div>
                <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg border border-blue-500">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                    <h3 className='bg-gray-900 text-white p-2 mb-6 text-lg'>Rating by User: {rating}</h3>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        {Name}
                    </h2>
                    <p className="mb-5 text-base text-gray-700 md:text-lg">
                        {description}
                    </p>
                    <div className="flex items-center md:justify-center">
                        <Link to='/contact'><button
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-full shadow-sm
                            bg-gray-900 text-white text-2xl focus:shadow-outline focus:outline-none hover:bg-gray-700"
                        >Contact Our Team</button></Link>
                            Get In Touch
                        
                        <p

                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Price: ${price}
                        </p>
                    </div>
                    <section className="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden w-full">
                    {
                    user ? <>
                        <div className='text-center text-lg mb-4 font-semibold'>
                            <h2 className=''>{user.displayName} Please Add a Review</h2>
                        </div>
                        <form onSubmit={handleSubmitReview} className='flex flex-col items-center w-full mx-auto border p-8 mb-16' >
                            <h2 className='text-2xl mb-6 font-semibold'>Add A Review</h2>

                            <input className='border p-2 px-4 w-3/4 rounded-lg mb-8' name='name' type="text" placeholder='Full Name' />

                            <input className='border p-2 px-4 w-3/4 rounded-lg mb-8' name='rating' type="text" placeholder='Type Your Rating Here Out of 5' />

                            <input className='border p-2 px-4 w-3/4 rounded-lg mb-8' name='photo' type="text" placeholder='Your Photo URL' />

                            <textarea className='border p-2 px-4 w-3/4 rounded-lg mb-8' name="review" rows='4' placeholder='Type Your Review Here'></textarea>

                            <input className='border p-1 px-4' name='date' type="date" />

                            <input className='bg-amber-500 p-2 px-8 rounded-md cursor-pointer text-white text-lg mt-8' type="submit" value='Submit' />
                        </form>
                    </>

                        :
                        <div className='text-center mb-10'>
                            <button className='text-2xl font-bold text-center'>Please <Link className='bg-amber-500 p-1 px-4 rounded-lg text-white' to='/login'>login</Link> to add a review.</button>
                        </div>
                }
                    </section>
                </div>
            </div>
                </div>
        </div>
    );
};

export default ServiceDetails;