import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";



const App = () => {
  const routes = [{
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [{
      path: '/',
      element: <HomePage />
    }, {
      path: '/careers',
      element: <HomePage />
    }, {
      path: '/events',
      element: <HomePage />
    }, {
      path: '/products',
      element: <HomePage />
    }, {
      path: '/support',
      element: <HomePage />
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
