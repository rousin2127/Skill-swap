import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './assets/layout/Root.jsx';
import Home from './assets/pages/Home.jsx';
import Skills from './assets/pages/Skills.jsx';
import SkillDetails from './assets/pages/SkillDetails.jsx';
import Profile from './assets/pages/Profile.jsx';
import Signup from './assets/components/Signup.jsx';
import Login from './assets/components/Login.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRout from './assets/components/PrivateRout.jsx';
import ForgotPass from './assets/pages/Forgetpass.jsx';




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
        element: <PrivateRout><SkillDetails></SkillDetails></PrivateRout>
      },
      {
        path: '/profile',
        element: <PrivateRout><Profile></Profile></PrivateRout>
      },
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/forget-password',
        element: <ForgotPass></ForgotPass>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
