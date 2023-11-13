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

           return setReviews(data);
        })
        .catch(e => console.error(e))

    },[user?.email])

    const handleReviewDelete = ( id, serviceName) => {
        const agree = window.confirm(`Are your sure, you want delete ${serviceName}`)
        if(agree){fetch(`http://localhost:8080/remove/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('successfully Deleted')
               const remeiningReview = reviews.filter(review => review._id !== id) 
                setReviews(remeiningReview);
            }
        })
        .catch(e => console.error(e))
        }
    }


    return (
        
        <div className=" overflow-scroll w-full">
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