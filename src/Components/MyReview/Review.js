import React, { useContext, useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import { authProvider } from '../../Context/AuthContext';

const Review = () => {
    const {user,  logOut} = useContext(authProvider);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/userReview?email=${user?.email}`, {
            headers:{
                authentication:`Bearer ${localStorage.getItem('myToken')}`
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
                logOut();
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
           return setReviews(data);
        })

    },[user?.email])

    const handleReviewDelete = ( _id, serviceName) => {


    }


    return (
        
            <div className="overflow-x-hidden w-full">
            {
                reviews.length > 0 ?

                reviews.map(review => <SingleReview key={review._id} review={review} handleReviewDelete={handleReviewDelete} />)

                    :
                    <div className='flex justify-center items-center py-52'>
                        <h2 className='text-3xl font-extrabold text-[#1B75BC]'>No Reviews Added Yet
                        </h2>
                    </div>
            }

        </div>
       
    );
};

export default Review;