import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { About } from './routes/about/about.jsx'
import { Contact } from './routes/contact/contact.jsx'
import { Gallery } from './routes/gallery/gallery.jsx'
import { Home } from './routes/home/home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
