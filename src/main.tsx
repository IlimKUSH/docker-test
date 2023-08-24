import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Welcome from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'welcome',
        element: <Welcome />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
