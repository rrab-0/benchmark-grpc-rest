import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Grpc from "./Grpc"
import Rest from "./Rest"

import './index.css';

const Parent = () => {
  return <div className='h-full bg-black text-white'>
    <div className='h-full gap-3 flex flex-col justify-center items-center'>
      <p>rest vs grpc</p>
      <div className='gap-3 flex justify-center items-center'>
        <a href='/grpc' className='text-blue-300'>grpc</a>
        <a href='/rest' className='text-blue-300'>rest</a>
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
    path: "/rest",
    element: <Rest />,
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

