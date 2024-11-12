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
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPase />,
    children: [
      {
        path: "/",
        loader: () => fetch('/Gadgets.json'),
        element: <Home />
      },
      {
        path: '/details/:product_id',
        loader: () => fetch('/Gadgets.json'),
        element: <Details />
      },
      {
        path: "/dashboard",
        loader: () => fetch('/Gadgets.json'),
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
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>
);


























