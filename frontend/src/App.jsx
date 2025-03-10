import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./pages/home"
import Search from './pages/Search';
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/search",
        element:<Search></Search>
    },
    
])


function App() {
    return (
        <RouterProvider router = {router}></RouterProvider>
    )
}
export default App;