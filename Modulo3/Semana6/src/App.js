import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CartProvider } from './contexts/CartContext';
import React from 'react';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
