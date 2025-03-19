import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Products from "./pages/Products";
import Support from "./pages/Support";



const App = () => {
  const routes = [{
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <HomePage />
    }, {
      path: '/careers',
      element: <Careers />
    }, {
      path: '/events',
      element: <Events />
    }, {
      path: '/products',
      element: <Products />
    }, {
      path: '/support',
      element: <Support />
    }, ]
  }]

  const router = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
