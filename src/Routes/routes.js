import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';



const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
           { 
            path: '/',
            element:<Home></Home>
           }
            
        ]
    }


]);

export default routes;