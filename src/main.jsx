import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home.jsx'
import Shop from './Components/Shop/Shop.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  { path: 'cart',
    element: <div>Cart Page</div>, // Placeholder for Cart component
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
