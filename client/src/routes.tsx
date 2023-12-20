import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Login } from './pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;