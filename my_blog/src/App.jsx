import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'
import Form from './Forms/Form';
import Posts from './pages/Posts';
import Post from './pages/Post';
import MainContent from "./components/MainContent/MainContent"
import MainLayout from './layout/MainLayout';
import About from './components/About/About';

function App() {

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <MainContent />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/post',
          element: <Post />
        },
        {
          path: '/contact',
          element: <Form />
        }
      ]
    }
  ]);


  return (
    <>
      <div className='app'>
        <RouterProvider router={router} />
      </div>

    </>

  )
}

export default App
