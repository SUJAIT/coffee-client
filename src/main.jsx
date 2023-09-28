import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import AddCoffe from './component/AddCoffe.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addCoffee",
    element:<AddCoffe></AddCoffe>
  },
  {
    path:"/updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
    ]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


    // children : [
    //   {
    //     path: '/',
    //     element : <Home></Home>
    //   },
    // ]