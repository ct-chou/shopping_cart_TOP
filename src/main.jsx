import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css' // Assuming you have a global CSS file
import Home from './Components/Home/Home.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Cart from './Components/Cart/Cart.jsx'

function App() {
    const [cartAmount, setCartAmount] = useState(0);

    const addToCart = (quantity) => {
      // Update cart amount
      setCartAmount(cartAmount + quantity);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home cartAmount={cartAmount}/>,
    },
    {
      path: 'shop',
      element: <Shop addToCart={addToCart} cartAmount={cartAmount}/>,
    },
    { path: 'cart',
      element: <Cart cartAmount={cartAmount}/>, 
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
