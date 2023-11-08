import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';
import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact/Contact';
import Team from '../Components/Team/Team';



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
            }
        ]
    }


]);

export default routes;