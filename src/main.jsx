import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import LandingPage from './Pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><LandingPage/></>,
  },
]);

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
