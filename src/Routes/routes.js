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
            }
        ]
    }


]);

export default routes;