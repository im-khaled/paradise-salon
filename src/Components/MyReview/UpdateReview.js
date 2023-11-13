import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData();
    const {addedReview, email, serviceId, serviceName, servicePrice, userName, _id} = review;

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const photoUrl = form.photo.value;
        const newReview = form.review.value;
        const date = form.date.value;
        const updatedReview = {
            name,
            rating,
            photoUrl,
            addedReview:newReview,
            date,
            email,
            serviceId,
            serviceName,
            servicePrice,
            userName
        }
            fetch(`http://localhost:8080/updatedreview/${_id}`,{
                method:'PUT',
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(updatedReview)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Successfully Updated')
                }
            })
            .catch(e => {
                toast.error('Something went wrong!')
                console.error(e)})


    }
    return (
        <div className=' flex justify-center mt-20'>
            <div className='w-4/6 max-md:w-5/6'>

                <form onSubmit={handleUpdateReview} className='flex flex-col items-center  mx-auto border p-8 mb-16' >
                    <h2 className='text-2xl mb-6 font-semibold'>Update Your Review</h2>

                    <input className='border p-2 px-4 w-3/4 rounded-lg mb-8' name='name' type="text" placeholder='Full Name' />

                    <input className='border p-2 px-4 w-3/4 rounded-lg mb-8' name='rating' type="text" placeholder='Type Your Rating Here Out of 5' />

                    <input className='border p-2 px-4 w-3/4 rounded-lg mb-8' name='photo' type="text" placeholder='Your Photo URL' />

                    <textarea className='border p-2 px-4 w-3/4 rounded-lg mb-8' name="review" rows='4' defaultValue={addedReview} placeholder='Type Your Review Here'></textarea>

                    <input className='border p-1 px-4' name='date' type="date" />

                    <input className='bg-amber-500 p-2 px-8 rounded-md cursor-pointer text-white text-lg mt-8' type="submit" value='Submit' />
                </form>
            </div>
        
        </div>
    );
};

export default UpdateReview;