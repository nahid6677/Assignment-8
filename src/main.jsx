import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details';
import DashBoard from './components/DashBoard';
import Statistics from './components/Statistics';
import Root from './components/Root'; 
import ErrorPase from './ErrorPase';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPase />,
    children: [
      {
        path: "/",
        loader: () => fetch('../public/Gadgets.json'),
        element: <Home />
      },
      {
        path: '/details/:product_id',
        loader: () => fetch('../public/Gadgets.json'),
        element: <Details />
      },
      {
        path: "/dashboard",
        loader: () => fetch('../public/Gadgets.json'),
        element: <DashBoard />
      },
      {
        path: "/statistics",
        element: <Statistics />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);


























