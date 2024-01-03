import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Page/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container m-auto'>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)
