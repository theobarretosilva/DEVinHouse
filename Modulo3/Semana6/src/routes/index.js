import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import { ContactUsPage } from '../pages/ContactUs/ContactUsPage';
import Details from '../pages/Details';

import Home from '../pages/Home';
import { OrdersPage } from '../pages/Orders/OrdersPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/details"} element={<Details />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={'/orders'} element={<OrdersPage />} />
      <Route path={'/contactUs'} element={<ContactUsPage />} />
    </Routes>
  );
}

export default AppRoutes;