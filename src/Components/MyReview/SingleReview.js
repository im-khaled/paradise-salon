import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./SingleReview.css"

const SingleReview = ({handleReviewDelete, review}) => {
    const {serviceName, rating, addedReview, _id ,date} = review;
    return (
        <table className="table w-4/5 mx-auto my-20 text-left leading-8 col-auto ">
            <thead className='bg-gray-100 mb-5 uppercase text-gray-700 '>
                <tr>
                    <th colSpan='1'>Name</th>
                    <th colSpan='1'>rating</th>
                    <th colSpan='1'>review</th>
                    <th colSpan='1'>Added Time</th>
                    <th colSpan='1'>Delete / Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div className="font-bold">{serviceName}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {rating}

                    </td>
                    <td>{addedReview}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs">{date}</button>
                    </th>
                    <th className='flex mt-2'>
                        <FaTrashAlt className='cursor-pointer' onClick={() => handleReviewDelete(_id, serviceName)} />
                        <Link to={`/updatereview/${_id}`} >
                            <FaEdit className='cursor-pointer ml-14' />
                        </Link>
                    </th>
                </tr >

            </tbody>


        </table>
    );
};

export default SingleReview;