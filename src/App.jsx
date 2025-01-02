
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from "./layouts/app-layout"
import Auth from './pages/auth'
import Dashboard from './pages/dashboard'
import Link from './pages/link'
import RedirectLink from './pages/redirect-link'
import Landing from './pages/landing'

const router = createBrowserRouter([
  {
  element:<AppLayout/>,
  children:[
    {
      path:'/',
      element:<Landing />
    },
    {
      path:'/dashboard',
      element:<Dashboard />
    },
    {
      path:'/auth',
      element:<Auth />
    },
    {
      path:'/link/:id',
      element:<Link />
    },
    {
      path:'/:id',
      element:<RedirectLink />
    },
  ]
}
])
function App() {

  return <RouterProvider router={router}/>;
  
}

export default App
