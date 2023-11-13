import React, { useContext, useEffect, useState } from 'react';
import { authProvider } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const AddAService = () => {
    const {user} = useContext(authProvider);

    const handleAddSerive = (e) =>{

        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const Name = form.Name.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const price = form.price.value;

        const newService = {
            image:image,
            Name:Name,
            description:description,
            rating:rating,
            price:price,
            email:user.email
        } 

       
        fetch('http://localhost:8080/addService',{

            method:'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(newService),
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added Successfully');
                }
            })
        e.target.reset();
        
    }
    
    return (
        <div>
            <div className='my-10 bg-amber-500 text-white text-center h-24'>
                <div className='h-full flex justify-center items-center text-4xl p-5 font-semibold'>
                    <p>Add A Service</p>
                </div>
            </div>
            <div className='flex justify-center'>
            <div className='mx-24 py-16 sm:w-2/3 max-sm:mx-6 max-sm:w-4/5'>
                <div className=' border p-8 shadow-md'>
                    
                    <form onSubmit={(e) => handleAddSerive(e)}>
                        <div className='space-y-8'>
                            <label className='block'>
                                    <p>Photo URL</p>  
                                    <input className='px-2 py-2 w-full border rounded' type="text" name='image' placeholder='Put your photo URL here'/>
                                </label>
                            <label className='block'>
                                <p>Title</p>  
                                <input className='px-2 py-2 w-full border rounded' type="text" name='Name' required placeholder='Type service title here'/>
                            </label>
                            <label className='block'>
                                <p>Short Description</p>
                                <textarea id="description" name="description" placeholder='Write a short description about your service' className='w-full ps-2 py-2 border rounded'></textarea>
                            </label>
                            <label className='block'>
                                <p>Service Rating</p>
                                <input className='px-2 py-2 w-full border rounded' type="float" name='rating' required placeholder='Please give a rating' />
                            </label>
                            <label className='block'>
                                <p>Service Price</p>
                                <input className='px-2 py-2 w-full border rounded' type="float" name='price' required placeholder='Write down your price' />
                            </label>
                            <button  className='btn bg-amber-500 px-4 py-2 w-full rounded text-center text-white hover:bg-amber-400'>Add Service</button>
                        </div>
                     </form>
                    
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default AddAService;