import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Login } from "./pages"
import { AuthProvider } from './authContext';

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes
