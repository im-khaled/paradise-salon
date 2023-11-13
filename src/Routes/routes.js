import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';
import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact/Contact';
import Team from '../Components/Team/Team';
import AllService from '../Components/Services/AllService';
import Login from '../Components/Authentication/Login';
import Register from '../Components/Register/Register';
import PrivateRaute from './PrivateRaute';
import AddAService from '../Components/AddAService/AddAService';
import ServiceDetails from '../Components/Services/ServiceDetails';
import Review from '../Components/MyReview/Review';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import UpdateReview from '../Components/MyReview/UpdateReview';



const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            { 
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/team',
                element:<Team></Team>
            },
            {
                path:'/services',
                element:<AllService></AllService>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/serviceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=>fetch(`http://localhost:8080/serviceDetails/${params.id}`)
            },
            {
                path:'/reviews',
                element:<Review></Review>
            },
            {
                path:'/updatereview/:id',
                element:<UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`http://localhost:8080/updatereview/${params.id}`)
            },
            {
                path:'/addService',
                element:<PrivateRaute><AddAService></AddAService></PrivateRaute>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }


]);

export default routes;