import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Inicio from './pages/Inicio'
import Gigs from './pages/Gigs'
import Discografia from './pages/Discografia'
import Contato from './pages/Contato'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Inicio />
      },
      {
        path: 'gigs',
        element: <Gigs />
      },
      {
        path: 'discografia',
        element: <Discografia />
      },
      {
        path: 'contato',
        element: <Contato />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
