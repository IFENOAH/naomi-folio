import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { MainLayout } from './compnents/Layout/layout.jsx'
import { About } from './routes/about/about.jsx'
import { Contact } from './routes/contact/contact.jsx'
import { Gallery } from './routes/gallery/gallery.jsx'
import { Home } from './routes/home/home.jsx'
import { PennyWorth } from './routes/home/project/pennyworth'
import { HomeIndex } from './routes/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => redirect('/work'),
      },
      {
        path: 'work',
        element: <HomeIndex />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'pennyworth',
            element: <PennyWorth />
          }
        ]
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
