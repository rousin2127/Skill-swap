import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './assets/layout/Root.jsx';
import Home from './assets/pages/Home.jsx';
import Skills from './assets/pages/Skills.jsx';
import SkillDetails from './assets/pages/SkillDetails.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/skills',
        Component: Skills
      },
      {
        path: '/skills/:id',
        element: <SkillDetails></SkillDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
