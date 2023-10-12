import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Error from './components/Error';

const AppLayout = () => {
  return (
    < >
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/project",
        element: <Project />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);