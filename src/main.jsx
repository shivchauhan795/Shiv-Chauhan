import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Landing from './pages/landing/Landing.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/projects/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><App /></>
  },
  {
    path: "/work",
    element: <Landing />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/projects",
    element: <Projects />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
