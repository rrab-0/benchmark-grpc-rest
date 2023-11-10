import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Grpc from "./Grpc"
import Http from "./Http"

import './index.css';

const Parent = () => {
  return <div className='h-full bg-black text-white'>
    <div className='h-full gap-3 flex flex-col justify-center items-center'>
      <p>http vs grpc</p>
      <div className='gap-3 flex justify-center items-center'>
        <a href='/grpc' className='text-blue-300'>grpc</a>
        <a href='/http' className='text-blue-300'>http</a>
      </div>
    </div>
  </div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
  },
  {
    path: "/grpc",
    element: <Grpc />,
  },
  {
    path: "/http",
    element: <Http />,
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

