import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from './Components/NavBarComponents';
import Home from './Pages/Home.jsx';
import SobreNos from './Pages/SobreNos.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formu from './Pages/Formu.jsx';


const router = createBrowserRouter([
    {
    path: "/",
    element: <p>caralho</p>,
  },
  
  {
    path: "/Home",
    element: <Home />,
  },
  
  {
    path: "/Form",
    element: <Formu />,
  },

  {
    path: "/SobreNos",
    element: <SobreNos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBarComponent />
    <RouterProvider router={router} />
  </React.StrictMode>  
)
